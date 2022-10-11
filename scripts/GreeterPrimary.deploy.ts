// scripts/Greeter.deploy.ts
import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  console.log("Deploying Greeter...");
  const greeter = await Greeter.deploy();

  console.log(greeter.address, " greeter(proxy) address");
  // console.log(
  //   await upgrades.erc1967.getImplementationAddress(greeter.address),
  //   " getImplementationAddress"
  // );
  // console.log(
  //   await upgrades.erc1967.getAdminAddress(greeter.address),
  //   " getAdminAddress"
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
