// scripts/Greeter.deploy.ts
import { ethers, upgrades } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  console.log("Deploying Greeter...");
  const greeter = await upgrades.deployProxy(Greeter);

  console.log(greeter.address, " greeter(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(greeter.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(greeter.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x9A676e781A523b5d0C0e43731313A708CB607508  greeter(proxy) address
// 0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0  getImplementationAddress
// 0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82  getAdminAddress
