// test/.GreeterV3Proxy.test.ts
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers, upgrades } from "hardhat";

describe("Greeter (proxy) V3 with name", function () {
  let greeter: Contract;
  let greeterV2: Contract;
  let greeterV3: Contract;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");
    const GreeterV3 = await ethers.getContractFactory("GreeterV3");

    // initilize with 42
    greeter = await upgrades.deployProxy(Greeter);

    // setting the greet value so that it can be checked after upgrade
    await greeter.setGreeting("WAGMI");

    greeterV2 = await upgrades.upgradeProxy(greeter.address, GreeterV2);
    greeterV3 = await upgrades.upgradeProxy(greeter.address, GreeterV3);
  });

  it("should retrieve value previously stored and increment correctly", async function () {
    expect(await greeterV2.counter()).to.equal(BigNumber.from("0"));
    await greeterV3.increment();
    expect(await greeterV3.counter()).to.equal(BigNumber.from("1"));
  });

  it("should set name correctly in V3", async function () {
    expect(await greeterV3.name()).to.equal("");

    const name = "Celo";
    await greeterV3.setName(name);
    expect(await greeterV3.name()).to.equal(name);
    expect(await greeterV3.greet()).to.equal(`WAGMI ${name}`);
  });
});
