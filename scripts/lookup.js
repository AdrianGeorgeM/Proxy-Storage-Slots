const hre = require('hardhat');
const { keccak256, toUtf8Bytes } = hre.ethers.utils;

const address = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853';
//deployed contract address from deploy.js
// This is a simple script to get the storage of a contract
async function lookup() {
	const storage = await hre.ethers.getContractAt('Storage', address);

	await storage.check();
	//eth_getStorageA t
	// const key = toUtf8Bytes(21, 32);
	// const baseSlot = toUtf8Bytes(0x2, 32).slice(2);
	// console.log(`Key: ${parseInt(key)} Base Slot: ${baseSlot}`);
	// const slot = keccak256(toUtf8Bytes('adrian'));
	// const storage = await hre.ethers.provider.getStorageAt(address, slot);
	console.log(`Storage at 0x0: ${parseInt(storage)}`); //0x61 is hex for 97
	// // run node to see the storage at 0x61
}

lookup().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
