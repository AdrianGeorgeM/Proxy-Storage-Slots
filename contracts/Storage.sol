// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./StorageSlot.sol";
import "hardhat/console.sol";

contract Storage {
    // uint256 x = 97; // 0x0 -> first storage slot
    // uint256 y = 98; // 0x1 -> 0x62
    // // mapping(uint => uint) name; // 0x2 -> 0x2
    // uint256 z = 99; // 0x2 -> 0x2
    // mapping(uint => uint) public testing; // 0x3 -> 0x3
    //    testing[21] = 77;
    //         testing[44] = 98;
    constructor() {
        StorageSlot.getUintSlot(keccak256("adrian")).value = 256;
    }

    //we check the value of the storage slot with the key "adrian" and print it to the console
    function check() external view returns (uint256) {
        console.log(
            "adrian: %s",
            StorageSlot.getUintSlot(keccak256("adrian")).value
        );
        return StorageSlot.getUintSlot(keccak256("adrian")).value;
    }
}
