// test/5.GreeterV4Proxy.test.ts
/* eslint-disable no-unused-vars */
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers, upgrades } from "hardhat";

describe("Greeter (proxy) V4 with getName", function () {
  let greeter: Contract;
  let greeterV2: Contract;
  let greeterV3: Contract;
  let greeterV4: Contract;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");
    const GreeterV3 = await ethers.getContractFactory("GreeterV3");
    const GreeterV4 = await ethers.getContractFactory("GreeterV4");

    greeter = await upgrades.deployProxy(Greeter);
    greeterV2 = await upgrades.upgradeProxy(greeter.address, GreeterV2);
    greeterV3 = await upgrades.upgradeProxy(greeter.address, GreeterV3);
    greeterV4 = await upgrades.upgradeProxy(greeter.address, GreeterV4);
  });

  it("should setName and getName correctly in V4", async function () {
    expect(await greeterV4.getName()).to.equal("");

    const greetername = "Celo";
    await greeterV4.setName(greetername);
    expect(await greeterV4.getName()).to.equal(greetername);
  });
});
