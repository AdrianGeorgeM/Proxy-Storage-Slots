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
}
