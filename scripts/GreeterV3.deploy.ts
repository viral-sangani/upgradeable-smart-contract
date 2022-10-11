// scripts/3.upgradeV3.ts
import { ethers, upgrades } from "hardhat";

const proxyAddress = "0x67d269191c92Caf3cD7723F116c85e6E9bf55933";

async function main() {
  console.log(proxyAddress, " original Greeter(proxy) address");
  const GreeterV3 = await ethers.getContractFactory("GreeterV3");
  console.log("upgrade to GreeterV3...");
  const greeterV3 = await upgrades.upgradeProxy(proxyAddress, GreeterV3);
  console.log(greeterV3.address, " GreeterV3 address(should be the same)");

  console.log(
    await upgrades.erc1967.getImplementationAddress(greeterV3.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(greeterV3.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
