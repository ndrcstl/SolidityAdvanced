// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract VestingSchedule is Ownable {
    address public tokenAddress;
    mapping(address => uint256) public vestingPeriods;
    mapping(address => bool) public whitelistedAddresses;

    constructor(address initialOwner, address _tokenAddress) Ownable(initialOwner) {
        tokenAddress = _tokenAddress;
    }

    function addStakeholder(address stakeholder, uint256 vestingPeriod) public onlyOwner {
        vestingPeriods[stakeholder] = vestingPeriod;
    }

    function whitelistAddress(address addr) public onlyOwner {
        whitelistedAddresses[addr] = true;
    }

    function claimTokens() public {
        require(whitelistedAddresses[msg.sender], "Only whitelisted addresses can claim tokens");
        require(block.timestamp >= vestingPeriods[msg.sender], "Vesting period has not ended");
        IERC20(tokenAddress).transfer(msg.sender, 100); // Replace with actual token amount
    }
}