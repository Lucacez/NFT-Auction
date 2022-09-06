import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
};

export default config;
