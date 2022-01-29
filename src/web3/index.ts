import {ethers} from 'ethers'
import config from "../../Config"
import ContractsAddress from '@gooddollar/goodprotocol/releases/deployment.json'

const erc20Abi = [
  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount, bytes data)"
];

const provider = new ethers.providers.JsonRpcProvider("https://rpc.fuse.io");

const gooddollar = new ethers.Contract(
  // "0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B",
  ContractsAddress[config.network].NameService,
  erc20Abi,
  provider
);


export const getTx = async (hash:any) => {
  console.log(erc20Abi);
  const receipt = await provider.getTransactionReceipt(hash);  
  const logs = receipt.logs.map((l:any) => {
    try {
      return gooddollar.interface.parseLog(l);
    } catch (e) {}
  });
  return logs;
};
