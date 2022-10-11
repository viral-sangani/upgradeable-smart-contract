// contracts/GreeterV3.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GreeterV2.sol";

contract GreeterV3 is GreeterV2 {
    string public name;

    // set name
    function setName(string memory _name) public {
        name = _name;
    }

    // greet() override
    function greet() public view override returns (string memory) {
        return string(abi.encodePacked(greeting, " ", name));
    }
}
