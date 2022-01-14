import {ethers} from 'ethers'
const erc20Abi = [
  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount, bytes data)"
];

const provider = new ethers.providers.JsonRpcProvider("https://rpc.fuse.io");

const gooddollar = new ethers.Contract(
  // "0x79BeecC4b165Ccf547662cB4f7C0e83b3796E5b3",
  "0x495d133B938596C9984d462F007B676bDc57eCEC",
  erc20Abi,
  provider
);

export const getEvents = async (recipient:string, fromBlock = 6400000) => {
  const filter = gooddollar.filters.Transfer(null, recipient);
  const events = await gooddollar.queryFilter(filter, fromBlock);
  const parsedEvents = events.map((e) => {
    const from = e.args?.from;
    return from;
  });
  return events;
};

export const getTx = async (hash:any) => {
  const receipt = await provider.getTransactionReceipt(hash);  
  const logs = receipt.logs.map((l:any) => {
    try {
      return gooddollar.interface.parseLog(l);
    } catch (e) {}
  });
  return logs;
};
