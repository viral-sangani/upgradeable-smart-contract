// contracts/Greeter.sol
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Greeter {
    string public greeting;

    // Emitted when the stored value changes
    event ValueChanged(string newValue);

    function greet() public view virtual returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        emit ValueChanged(_greeting);
    }
}
