const { assert } = require("chai");

const BamiToken = artifacts.require("BamiToken");

contract("BamiToken", ([alice, bob, carol, dev, minter]) => {
  beforeEach(async () => {
    this.bami = await BamiToken.new({ from: minter });
  });

  it("mint", async () => {
    await this.bami.mint(alice, 1000, { from: minter });
    assert.equal((await this.bami.balanceOf(alice)).toString(), "1000");
  });
});
