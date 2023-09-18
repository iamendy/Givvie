// SPDX-License-Identifier: MIT
// Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GivvieToken is ERC20 {
  address givvieHQ;
  uint rewards = 100000000000000000000000; //100,000 token rewards for saving

  constructor(address _givvieHQ) ERC20("Givvie Token", "GIVV") {
    givvieHQ = _givvieHQ;
    _mint(givvieHQ, rewards);
    _mint(msg.sender, 900000000000000000000000); //team wallet
  }
}
