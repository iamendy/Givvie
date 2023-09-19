// SPDX-License-Identifier: MIT
//Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDCFAKE is ERC20, Ownable {
  constructor() ERC20("USDC Token FAKE", "USDC") {
    _mint(msg.sender, 1000000000000000000000);
  }
}
