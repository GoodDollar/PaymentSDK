import { getTx } from '../web3';
import { TxData } from '../../types';
import { ethers } from 'ethers';


export async function validateTx({txHash,recipient,amount,invoiceId,}:TxData):Promise<boolean> {
    let res = await getTx(txHash);
    let result = false;
    let value = res.map((v:any)=>{
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
}