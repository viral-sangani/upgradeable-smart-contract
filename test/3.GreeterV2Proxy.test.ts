// test/3.GreeterV2Proxy.test.ts
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers, upgrades } from "hardhat";

describe("Greeter (proxy) V2", function () {
  let greeter: Contract;
  let greeterV2: Contract;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");

    greeter = await upgrades.deployProxy(Greeter);

    // setting the greet value so that it can be checked after upgrade
    await greeter.setGreeting("WAGMI");

    greeterV2 = await upgrades.upgradeProxy(greeter.address, GreeterV2);
  });

  it("should retrieve value previously stored correctly", async function () {
    expect(await greeterV2.greet()).to.equal("WAGMI");

    await greeter.setGreeting("Celo to the Moon");
    expect(await greeterV2.greet()).to.equal("Celo to the Moon");
  });
});
