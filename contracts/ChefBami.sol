// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./libs/IBEP20.sol";
import "./libs/SafeBEP20.sol";
import "./libs/ILocker.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "./BamiToken.sol";

// BAMI Chef is the one who bakes Banh Mi and bring you the most delicious BAMI
// We believe that everyone should be able to enjoy this kind of yummy food
// This is a reattempt to make a new Masterchef who named BAMI Chef and will make BAMI
// for all of us
// God bless this contract
contract ChefBami is Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeBEP20 for IBEP20;

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        address fundedBy; // Funded by address()
        //
        // We do some fancy math here. Basically, any point in time, the amount of BAMIs
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accBamiPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accBamiPerShare` (and `lastRewardBlock`) gets updated.
        //   2. User's `amount` gets updated.
        //   3. User's `rewardDebt` gets updated.
        //   4. User's `fundedBy` updated by User address
    }

    // Info of each pool.
    struct PoolInfo {
        IBEP20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. BAMIs to distribute per block.
        uint256 lastRewardBlock; // Last block number that BAMIs distribution occurs.
        uint256 accBamiPerShare; // Accumulated BAMIs per share, times 1e12. See below.
        uint16 depositFeeBP; // Deposit fee in basis points
        ILocker locker; // Locker contract
    }

    // The BAMI TOKEN!
    IBEP20 public bami;
    // Dev address.
    address public devaddr;
    // BAMI tokens created per block.
    uint256 public bamiPerBlock;
    // Bonus muliplier for early bami makers.
    uint256 public constant BONUS_MULTIPLIER = 1;
    // Deposit Fee address
    address public feeAddress;

    // Vault address
    address public vaultAddress;

    // Info of each pool.
    PoolInfo[] public poolInfo;
    // Info of each user that stakes LP tokens.
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    // Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint = 0;
    // The block number when BAMI mining starts.
    uint256 public startBlock;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event Harvest(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(
        address indexed user,
        uint256 indexed pid,
        uint256 amount
    );
    event SetFeeAddress(address indexed user, address indexed newAddress);
    event SetDevAddress(address indexed user, address indexed newAddress);
    event SetVaultAddress(address indexed user, address indexed newAddress);
    event UpdateEmissionRate(address indexed user, uint256 goosePerBlock);

    constructor(
        BamiToken _bami,
        address _devaddr,
        address _feeAddress,
        address _vaultAddress,
        uint256 _bamiPerBlock,
        uint256 _startBlock
    ) public {
        bami = _bami;
        devaddr = _devaddr;
        feeAddress = _feeAddress;
        vaultAddress = _vaultAddress;
        bamiPerBlock = _bamiPerBlock;
        startBlock = _startBlock;
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

    mapping(IBEP20 => bool) public poolExistence;
    modifier nonDuplicated(IBEP20 _lpToken) {
        require(poolExistence[_lpToken] == false, "nonDuplicated: duplicated");
        _;
    }

    // Add a new lp to the pool. Can only be called by the owner.
    function add(
        uint256 _allocPoint,
        IBEP20 _lpToken,
        uint16 _depositFeeBP,
        ILocker _locker,
        bool _withUpdate
    ) public onlyOwner nonDuplicated(_lpToken) {
        require(
            _depositFeeBP <= 10000,
            "add: invalid deposit fee basis points"
        );
        if (_withUpdate) {
            massUpdatePools();
        }
        uint256 lastRewardBlock =
            block.number > startBlock ? block.number : startBlock;
        totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolExistence[_lpToken] = true;
        poolInfo.push(
            PoolInfo({
                lpToken: _lpToken,
                allocPoint: _allocPoint,
                lastRewardBlock: lastRewardBlock,
                accBamiPerShare: 0,
                depositFeeBP: _depositFeeBP,
                locker: _locker
            })
        );
    }

    // Update the given pool's BAMI allocation point and deposit fee. Can only be called by the owner.
    function set(
        uint256 _pid,
        uint256 _allocPoint,
        uint16 _depositFeeBP,
        ILocker _locker,
        bool _withUpdate
    ) public onlyOwner {
        require(
            _depositFeeBP <= 10000,
            "set: invalid deposit fee basis points"
        );
        if (_withUpdate) {
            massUpdatePools();
        }
        totalAllocPoint = totalAllocPoint.sub(poolInfo[_pid].allocPoint).add(
            _allocPoint
        );
        poolInfo[_pid].allocPoint = _allocPoint;
        poolInfo[_pid].depositFeeBP = _depositFeeBP;
        poolInfo[_pid].locker = _locker;
    }

    // Return reward multiplier over the given _from to _to block.
    function getMultiplier(uint256 _from, uint256 _to)
        public
        pure
        returns (uint256)
    {
        return _to.sub(_from).mul(BONUS_MULTIPLIER);
    }

    // View function to see pending BAMIs on frontend.
    function pendingBami(uint256 _pid, address _user)
        external
        view
        returns (uint256)
    {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accBamiPerShare = pool.accBamiPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 multiplier =
                getMultiplier(pool.lastRewardBlock, block.number);
            uint256 bamiReward =
                multiplier.mul(bamiPerBlock).mul(pool.allocPoint).div(
                    totalAllocPoint
                );
            accBamiPerShare = accBamiPerShare.add(
                bamiReward.mul(1e12).div(lpSupply)
            );
        }
        return user.amount.mul(accBamiPerShare).div(1e12).sub(user.rewardDebt);
    }

    // Update reward variables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        if (block.number <= pool.lastRewardBlock) {
            return;
        }
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply == 0 || pool.allocPoint == 0) {
            pool.lastRewardBlock = block.number;
            return;
        }
        uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
        uint256 bamiReward =
            multiplier.mul(bamiPerBlock).mul(pool.allocPoint).div(
                totalAllocPoint
            );
        // Transfer Bami from vault address
        bami.safeTransferFrom(vaultAddress, devaddr, bamiReward.div(10));
        bami.safeTransferFrom(vaultAddress, address(this), bamiReward);
        pool.accBamiPerShare = pool.accBamiPerShare.add(
            bamiReward.mul(1e12).div(lpSupply)
        );
        pool.lastRewardBlock = block.number;
    }

    // Deposit LP tokens to MasterChef for BAMI allocation.
    function deposit(uint256 _pid, uint256 _amount) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        updatePool(_pid);
        // Harvest the remaining token before calculate new amount
        _harvest(msg.sender, _pid);
        if (_amount > 0) {
            pool.lpToken.safeTransferFrom(
                address(msg.sender),
                address(this),
                _amount
            );
            if (pool.depositFeeBP > 0) {
                uint256 depositFee = _amount.mul(pool.depositFeeBP).div(10000);
                pool.lpToken.safeTransfer(feeAddress, depositFee);
                user.amount = user.amount.add(_amount).sub(depositFee);
            } else {
                user.amount = user.amount.add(_amount);
            }
            if (user.fundedBy == address(0)) user.fundedBy = msg.sender;
        }
        user.rewardDebt = user.amount.mul(pool.accBamiPerShare).div(1e12);
        emit Deposit(msg.sender, _pid, _amount);
    }

    // Withdraw LP tokens from MasterChef.
    function withdraw(uint256 _pid, uint256 _amount) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");
        require(user.fundedBy == msg.sender, "withdraw:: only funder");
        updatePool(_pid);
        // Effects
        _harvest(msg.sender, _pid);
        if (_amount > 0) {
            user.amount = user.amount.sub(_amount);
            pool.lpToken.safeTransfer(address(msg.sender), _amount);
        }
        user.rewardDebt = user.amount.mul(pool.accBamiPerShare).div(1e12);
        if (user.amount == 0) user.fundedBy = address(0);
        emit Withdraw(msg.sender, _pid, _amount);
    }

    // Harvest BAMI earn from the pool.
    function harvest(uint256 _pid) public {
        updatePool(_pid);
        _harvest(msg.sender, _pid);
    }

    /// @notice Harvest proceeds for transaction sender to `to`.
    /// @param pid The index of the pool. See `poolInfo`.
    /// @param to Receiver of BAMI rewards.
    function _harvest(address to, uint256 pid)
        internal
    {
        PoolInfo memory pool = poolInfo[pid];
        UserInfo storage user = userInfo[pid][to];
        uint256 accumulatedBami =
            user.amount.mul(pool.accBamiPerShare).div(1e12);
        uint256 _pendingBami = accumulatedBami.sub(user.rewardDebt);
        if (_pendingBami == 0) {
            return;
        }

        require(
            _pendingBami <= bami.balanceOf(address(this)),
            "ChefBami::_harvest:: wtf not enough bami"
        );

        // Effects
        user.rewardDebt = accumulatedBami;

        // Interactions
        ILocker _locker = pool.locker;
        if (address(_locker) != address(0)) {
            uint256 lockAmount = _locker.calLockAmount(_pendingBami);
            bami.approve(address(_locker), lockAmount);
            _locker.lock(to, lockAmount);
            _pendingBami = _pendingBami.sub(lockAmount);
            bami.approve(address(_locker), 0);
        }

        safeBamiTransfer(to, _pendingBami);

        emit Harvest(msg.sender, pid, _pendingBami);
    }

    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw(uint256 _pid) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        uint256 amount = user.amount;
        user.amount = 0;
        user.rewardDebt = 0;
        pool.lpToken.safeTransfer(address(msg.sender), amount);
        emit EmergencyWithdraw(msg.sender, _pid, amount);
    }

    // Safe bami transfer function, just in case if rounding error causes pool to not have enough BAMIs.
    function safeBamiTransfer(address _to, uint256 _amount) internal {
        uint256 bamiBal = bami.balanceOf(address(this));
        bool transferSuccess = false;
        if (_amount > bamiBal) {
            transferSuccess = bami.transfer(_to, bamiBal);
        } else {
            transferSuccess = bami.transfer(_to, _amount);
        }
        require(transferSuccess, "safeBamiTransfer: transfer failed");
    }

    // Update dev address by the previous dev.
    function dev(address _devaddr) public {
        require(msg.sender == devaddr, "dev: wut?");
        devaddr = _devaddr;
        emit SetDevAddress(msg.sender, _devaddr);
    }

    function setFeeAddress(address _feeAddress) public {
        require(msg.sender == feeAddress, "setFeeAddress: FORBIDDEN");
        feeAddress = _feeAddress;
        emit SetFeeAddress(msg.sender, _feeAddress);
    }

    function setVaultAddress(address _vaultAddress) public {
        require(msg.sender == devaddr, "setVaultAddress: only dev is allowed to set vault address");
        vaultAddress = _vaultAddress;
        emit SetVaultAddress(msg.sender, _vaultAddress);
    }

    //Pancake has to add hidden dummy pools inorder to alter the emission, here we make it simple and transparent to all.
    function updateEmissionRate(uint256 _bamiPerBlock) public onlyOwner {
        massUpdatePools();
        bamiPerBlock = _bamiPerBlock;
        emit UpdateEmissionRate(msg.sender, _bamiPerBlock);
    }
}
