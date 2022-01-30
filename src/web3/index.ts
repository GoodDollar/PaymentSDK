import {ethers} from 'ethers'
import config from "../../Config"
import ContractsAddress from '@gooddollar/goodprotocol/releases/deployment.json'
import ERC20ABI from '@gooddollar/goodprotocol/artifacts/contracts/Interfaces.sol/ERC20.json'


const provider = new ethers.providers.JsonRpcProvider(config.web3RPC);

const contractAddress:any = ContractsAddress

const gooddollar = (_network:string | null) => new ethers.Contract(
  contractAddress[_network || config.network].GoodDollar,
  ERC20ABI.abi,
  provider
);

export const getTx = async (hash:any,network:any) => {
  const receipt = await provider.getTransactionReceipt(hash);  
  const logs = receipt.logs.map((l:any) => {
    try {
      return gooddollar(network).interface.parseLog(l);
    } catch (e) {}
  });
  return logs;
};
