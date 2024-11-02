import { ethers } from "ethers";

import Web3Modal from "web3modal";

import ERC20Generator from "./ERC20Generator.json";

import icoMarketplace from "./icoMarketplace.json";

export const ERC20Generator_ABI = ERC20Generator.abi;

export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;

export const ICO_MARKETPLACE_ADDRESS =
  process.env.NEXT_PUBLIC_ICO_MARKETPLACE_ADDRESS;

export const ICO_MARKETPLACE_ABI = icoMarketplace.abi;

//PINATA KEY

export const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;

export const PINATA_SECRECT_KEY = process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY;

//NETWORKS

const networks = {
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,

    chainName: "Polygon Amoy",

    nativeCurrency: {
      name: "POL",

      symbol: "POL",

      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,

    chainName: "Polygon Mainnet",

    nativeCurrency: {
      name: "POL",

      symbol: "POL",

      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polyscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,

    chainName: "Binance Mainnet",

    nativeCurrency: {
      name: "Binance chain",

      symbol: "BNB",

      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com/"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,

    chainName: "Base Mainnet",

    nativeCurrency: {
      name: "ETH",

      symbol: "ETH",

      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org"],
    blockExplorerUrls: ["https://bscscan.com/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");

    await window.ethereum.request({
      method: "wallet_addEthereumChain",

      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "polygon_amoy";
  await changeNetwork({ networkName });
};

export const shortenAddress = (address) =>  `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`;

//CONTRACT

const fetchContract = (address, abi, signer) => new ethers.Contract(address, abi, signer);

export const ICO_MARKETPLACE_CONTRACT = async () => {
  try {
    const web3Modal = new Web3Modal();

    const connection = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();

    const Contract = fetchContract(
        ICO_MARKETPLACE_ADDRESS,
        ICO_MARKETPLACE_ABI,
        signer
    );

    return Contract;

  } catch (error) {
    console.log(error);
  }
};

//TOKEN CONTRACT

export const TOKEN_CONTRACT = async (TOKEN_ADDRESS) => {
    try {
      const web3Modal = new Web3Modal();
  
      const connection = await web3Modal.connect();
  
      const provider = new ethers.providers.Web3Provider(connection);
  
      const signer = provider.getSigner();
  
      const Contract = fetchContract(
          TOKEN_ADDRESS,
          ERC20Generator_ABI,
          signer
      );
  
      return Contract;
      
    } catch (error) {
      console.log(error);
    }
};
