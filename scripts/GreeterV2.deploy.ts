// scripts/2.upgradeV2.ts
import { ethers, upgrades } from "hardhat";

const proxyAddress = "0x67d269191c92Caf3cD7723F116c85e6E9bf55933";

async function main() {
  console.log(proxyAddress, " original Greeter(proxy) address");
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  console.log("upgrade to GreeterV2...");
  const greeterV2 = await upgrades.upgradeProxy(proxyAddress, GreeterV2);
  console.log(greeterV2.address, " GreeterV2 address(should be the same)");

  console.log(
    await upgrades.erc1967.getImplementationAddress(greeterV2.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(greeterV2.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0  GreeterV2 address(should be the same)
// 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9  getImplementationAddress
// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512  getAdminAddress
