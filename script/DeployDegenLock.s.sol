// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../contracts/DegenLockToken.sol";

contract DeployDegenLock is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        // DEGEN token address: 0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed
        // IJN (base mainnet): 0x2Da1F02de055Cebe51c6f6526ed67Ad0dc86f431
        address degenToken = 0x2Da1F02de055Cebe51c6f6526ed67Ad0dc86f431;

        vm.startBroadcast(deployerPrivateKey);

        DegenLockToken degenLock = new DegenLockToken(degenToken);

        vm.stopBroadcast();

        console.log("DegenLockToken deployed to:", address(degenLock));
        console.log("Locked token:", address(degenLock.TOKEN()));
    }
}
