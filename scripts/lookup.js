const hre = require('hardhat');
const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// This is a simple script to get the storage of a contract
async function lookup() {
	//eth_getStorageAt
	const storage = await hre.ethers.provider.getStorageAt(address, '0x0');
	console.log(`Storage at 0x0: ${parseInt(storage)}`); //0x61 is hex for 97
	// run node to see the storage at 0x61
}

lookup().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
