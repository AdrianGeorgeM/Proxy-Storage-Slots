// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//
library StorageSlot {
    struct AddressSlot {
        address value;
    }

    struct UintSlot {
        uint value;
    }

    struct BoolSlot {
        bool value;
    }

    struct BytesSlot {
        bytes value;
    }

    function getAddressSlot(
        bytes32 slot
    ) internal pure returns (AddressSlot storage r) {
        assembly {
            r.slot := slot
        }
    }

    function getUintSlot(
        bytes32 slot
    ) internal pure returns (UintSlot storage r) {
        assembly {
            r.slot := slot
        }
    }

    function getBoolSlot(
        bytes32 slot
    ) internal pure returns (BoolSlot storage r) {
        assembly {
            r.slot := slot
        }
    }

    function getBytesSlot(
        bytes32 slot
    ) internal pure returns (BytesSlot storage r) {
        assembly {
            r.slot := slot
        }
    }
}
