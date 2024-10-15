//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzepplin/contracts/token/ERC20/ERC20.sol";

contarct ERC20Token is ERC20 {
    constructor() ERC20("@shreya", "sbp"){
        _mint(msg.sender, 50000**18);
    }
}