const hre = require('hardhat');
const { keccak256, hexZeroPad } = hre.ethers.utils;
const address = '  0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
//deployed contract address from deploy.js
// This is a simple script to get the storage of a contract
async function lookup() {
	//eth_getStorageA t
	const key = hexZeroPad(21, 32);
	const baseSlot = hexZeroPad(0x2, 32).slice(2);

	// console.log(`Key: ${parseInt(key)} Base Slot: ${baseSlot}`);
	const slot = keccak256(key + baseSlot);
	const storage = await hre.ethers.provider.getStorageAt(address, slot);
	console.log(`Storage at 0x0: ${parseInt(storage)}`); //0x61 is hex for 97
	// run node to see the storage at 0x61
}

lookup().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
