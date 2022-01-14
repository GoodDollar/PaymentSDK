import { getTx } from '../web3/ether';
import { TxData } from '../../types';
import { ethers } from 'ethers';


export function validateTx({txHash,recipient,amount,invoiceId,}:TxData):Promise<string>{
    let res = getTx(txHash)
             .then((val:any)=>{
                let result = false;
                let value = val.map((v:any)=>{
                    if(v && v.args.data) {   
                        let comparingEntity = JSON.parse(ethers.utils.toUtf8String(v.args.data))
                        let dataAmount = parseInt(v.args.amount._hex,16)
                        if(comparingEntity.invoiceId===invoiceId &&
                                v.args.to===recipient && dataAmount===amount){
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