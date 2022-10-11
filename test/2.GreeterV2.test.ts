// test/2.GreeterV2.test.ts
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";

describe("Greeter V2", function () {
  let greeterV2: Contract;

  beforeEach(async function () {
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");
    greeterV2 = await GreeterV2.deploy();
    await greeterV2.deployed();
  });

  it("should retrieve value previously stored", async function () {
    await greeterV2.setGreeting("Celo to the Moon");
    expect(await greeterV2.greet()).to.equal("Celo to the Moon");
  });

  it("should increment value correctly", async function () {
    expect(await greeterV2.counter()).to.equal(BigNumber.from("0"));
    await greeterV2.increment();
    expect(await greeterV2.counter()).to.equal(BigNumber.from("1"));
  });
});
