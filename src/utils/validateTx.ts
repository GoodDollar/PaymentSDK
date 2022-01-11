import { getTx } from '../web3/ether';
import { TxData } from '../../types';
// import Web3 from 'web3';
let Web3 = require('web3');


export function validateTx(txData:TxData):Promise<string>{
    let res = getTx(txData.txHash)
             .then((val:any)=>{
                let result = false;
                let value = val.map((v:any)=>{
                    if(v && v.args.data) {   
                        let comparingEntity = Web3.utils.hexToUtf8(v.args.data)
                        comparingEntity = JSON.parse(comparingEntity)
                        let amount = parseInt(v.args.amount._hex,16)
                        if((comparingEntity.invoiceId===txData.invoiceId || v.args.data===txData.data) &&
                                v.args.to===txData.recipient && amount===txData.amount){
                            return true;
                        }
                    }
                 })
                 value.map((v:any)=>{if(v==true)result=true;});
                 return result;
             })
             .catch((err:any)=>{
                 return err;
             });    
    return res;
}