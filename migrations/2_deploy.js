// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Blockdaemon Protocol Ambassador","BPA", "https://my-json-server.typicode.com/robbiekruszynski/alpha_bd_nft_db/tokens/");
};