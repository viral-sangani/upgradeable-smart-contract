// test/1.Greeter.test.ts
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Greeter", function () {
  let greeter: Contract;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy();
    await greeter.deployed();
  });

  it("should greet correctly before and after changing value", async function () {
    await greeter.setGreeting("Celo to the Moon");
    expect(await greeter.greet()).to.equal("Celo to the Moon");
  });
});
