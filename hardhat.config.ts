import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";

configDotenv();

const { SEPOLIA_RPC, PRIVATE_KEY1, ETHERSCAN_API } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [PRIVATE_KEY1!],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API!,
  },
};

export default config;
