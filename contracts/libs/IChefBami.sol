// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
import "./IBEP20.sol";
import "./ILocker.sol";

interface IChefBami {
    function poolLength() external view returns (uint256);

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
