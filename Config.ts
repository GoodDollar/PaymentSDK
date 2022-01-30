import ContractsAddress from '@gooddollar/goodprotocol/releases/deployment.json'
const config =  {
  networkId: ContractsAddress['fuse'].networkId,
  linkUrl:"http://wallet.gooddollar.org:3000/?code=",
  network:"production-mainnet",
  web3RPC:"https://rpc.fuse.io",
}
export default config;