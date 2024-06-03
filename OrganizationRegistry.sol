// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./VestingSchedule.sol";

contract OrganizationRegistry {
    mapping(address => VestingSchedule) public organizations;

    function registerOrganization(address orgAddress, address tokenAddress) public {
        VestingSchedule vestingSchedule = new VestingSchedule(orgAddress, tokenAddress);
        organizations[orgAddress] = vestingSchedule;
    }

    function getVestingSchedule(address orgAddress) public view returns (VestingSchedule) {
        return organizations[orgAddress];
    }
}