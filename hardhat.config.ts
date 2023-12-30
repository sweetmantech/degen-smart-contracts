import '@nomicfoundation/hardhat-ignition-ethers';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-verify';
import dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    // for mainnet
    base_mainnet: {
      url: 'https://mainnet.base.org',
      accounts: [process.env.PRIVATE_KEY as string],
    },
    // for testnet
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      baseGoerli: process.env.BASESCAN_API_KEY ?? '',
    },
  },
};

export default config;
