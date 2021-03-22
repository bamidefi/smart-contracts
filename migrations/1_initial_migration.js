const BamiToken = artifacts.require("BamiToken");
const MasterChefV2 = artifacts.require("MasterChefV2");

/*
I fought far too long for this.
example parameters to deploy
"foo"
"bar"
["0x6162636400000000000000000000000000000000000000000000000000000000","0x6262636400000000000000000000000000000000000000000000000000000000"]
2524611661 //year 2050, should be 2077 xd
*/

module.exports = function (deployer) {
  deployer.deploy(BamiToken).then(function () {
    return deployer.deploy(
      MasterChefV2,
      BamiToken.address,
      "0x4542b1c810FD07d78ac9e0850ef8FD36555095e8", // Dev Address
      "0x4542b1c810FD07d78ac9e0850ef8FD36555095e8", // Fee Address
      1, // BAMI token per block
      0 // Start block doesn't matter here, maybe remove soon?
    );
  });
};
