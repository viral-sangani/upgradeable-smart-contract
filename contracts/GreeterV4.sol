// contracts/GreeterV4.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GreeterV2.sol";

contract GreeterV4 is GreeterV2 {
    string private name;

    event NameChanged(string name);

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}
