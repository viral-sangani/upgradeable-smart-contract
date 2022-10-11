// contracts/GreeterV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Greeter.sol";

contract GreeterV2 is Greeter {
    uint256 public counter;

    // Increments the counter value by 1
    function increment() public {
        counter++;
    }
}
