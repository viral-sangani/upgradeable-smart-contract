import { ethers, upgrades } from "hardhat";

const proxyAddress = "0xd15100A570158b7EEbE196405D8a456d56807F2d";
async function main() {
  console.log(proxyAddress, " original Greeter(proxy) address");
  const GreeterV4 = await ethers.getContractFactory("GreeterV4");
  console.log("Preparing upgrade to GreeterV4...");
  const greeterV4Address = await upgrades.prepareUpgrade(
    proxyAddress,
    GreeterV4
  );
  console.log(greeterV4Address, " GreeterV4 implementation contract address");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
