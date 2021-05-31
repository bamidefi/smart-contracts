// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;
import "./IBEP20.sol";
import "./ILocker.sol";

interface IChefBami {
    // Info of each pool.
    struct PoolInfo {
        IBEP20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. BAMIs to distribute per block.
        uint256 lastRewardBlock; // Last block number that BAMIs distribution occurs.
        uint256 accBamiPerShare; // Accumulated BAMIs per share, times 1e12. See below.
        uint16 depositFeeBP; // Deposit fee in basis points
        ILocker locker; // Locker contract
    }
    function poolLength() external view returns (uint256);
    function bamiPerBlock() external view returns (uint256);
    function totalAllocPoint() external view returns (uint256);
    function poolInfo(uint256 pid) external view returns (IChefBami.PoolInfo memory);
    function add(
        uint256 _allocPoint,
        IBEP20 _lpToken,
        uint16 _depositFeeBP,
        ILocker _locker,
        bool _withUpdate
    ) external;

    function set(
        uint256 _pid,
        uint256 _allocPoint,
        uint16 _depositFeeBP,
        ILocker _locker,
        bool _withUpdate
    ) external;

    function pendingBami(uint256 _pid, address _user)
        external
        view
        returns (uint256);

    function updatePool(uint256 _pid) external;

    function deposit(
        uint256 _pid,
        uint256 _amount
    ) external;

    function withdraw(
        uint256 _pid,
        uint256 _amount
    ) external;

    function harvest(uint256 _pid) external;
}
