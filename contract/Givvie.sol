// SPDX-License-Identifier: MIT
// Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Givvie is Ownable {
  IERC20 public usdcTokenAddress; //FAKE USDC
  IERC20 public givvieTokenAddress; //Givvie token for successful savings

  uint256 penaltyFee = 5; //5%

  enum Status {
    INACTIVE,
    ACTIVE
  }

  struct Account {
    uint256 balance;
    Status status;
    uint256 createdAt;
    uint256 expiresAt;
  }

  struct Savings {
    uint256 amount;
    uint256 duration;
  }

  //users active savings
  mapping(address => Account) records;

  //tracks all user's succesful savings
  mapping(address => Savings[]) history;

  event Created(
    address indexed owner,
    uint256 amount,
    uint256 indexed createdAt,
    uint256 expiresAt
  );

  event Updated(uint256 amount, uint256 updatedAt);

  event Broken(address indexed owner, uint256 saved, uint256 expiredAt);

  constructor(address _usdcTokenAddress) {
    usdcTokenAddress = IERC20(_usdcTokenAddress);
  }

  function createPiggy(uint256 _amount, uint256 _duration) external {
    require(_amount > 0 && _duration > 0, "Invalid values");

    //transfer USDC to contract
    usdcTokenAddress.transferFrom(msg.sender, address(this), _amount);

    //uint256 expiresAt = block.timestamp + (_duration * 86400); //convert to days

    uint256 expiresAt = block.timestamp + _duration;

    //set an active record
    records[msg.sender] = Account({
      balance: _amount,
      status: Status.ACTIVE,
      createdAt: block.timestamp,
      expiresAt: expiresAt
    });

    emit Created(msg.sender, _amount, expiresAt, block.timestamp);
  }

  function updateBalance(uint256 _amount) external {
    require(records[msg.sender].status == Status.ACTIVE, "Piggy is not ACTIVE");
    require(_amount > 0, "Invalid amount");

    //transfer USDC to contract
    usdcTokenAddress.transferFrom(msg.sender, address(this), _amount);
    //update record
    records[msg.sender].balance += _amount;

    emit Updated(_amount, block.timestamp);
  }

  //The higher the price and duration, the higher the reward token (Gamification)
  function calculateReward(
    Account memory account
  ) internal pure returns (uint256) {
    return (account.balance * (account.expiresAt - account.createdAt)) / 1000;
  }

  function breakPiggy() external {
    Account memory account = records[msg.sender];

    require(account.status == Status.ACTIVE, "No record");

    //penalize if broken before duration
    if (block.timestamp < (account.expiresAt)) {
      uint256 penaltyBalance = account.balance -
        ((penaltyFee * account.balance) / 100);

      usdcTokenAddress.transfer(msg.sender, penaltyBalance);
    } else {
      //reward with Givvie token
      usdcTokenAddress.transfer(msg.sender, account.balance);
      givvieTokenAddress.transfer(msg.sender, calculateReward(account));
      //push to history
      Savings memory savings = Savings({
        amount: account.balance,
        duration: account.expiresAt - account.createdAt
      });

      history[msg.sender].push(savings);
    }

    //reset record
    account.balance = 0;
    account.createdAt = 0;
    account.expiresAt = 0;
    account.status = Status.INACTIVE;

    records[msg.sender] = account;
    emit Broken(msg.sender, account.balance, block.timestamp);
  }

  function getHistory(address _owner) external view returns (Savings[] memory) {
    return history[_owner];
  }

  function getRecord(address _owner) external view returns (Account memory) {
    return records[_owner];
  }

  //checks if a user has an active Piggy
  function isActive(address _owner) external view returns (bool) {
    uint256 status = uint256(records[_owner].status);
    return status > 0 ? true : false;
  }

  //Givvie Token address
  function setGivvieToken(address _givvieTokenAddress) external onlyOwner {
    givvieTokenAddress = IERC20(_givvieTokenAddress);
  }
}
