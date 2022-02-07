import { getTx } from '../web3Data';
import { TxData } from '../../types';
import { ethers } from 'ethers';


export async function validateTx({txHash,recipient,amount,invoiceId,network}:TxData):Promise<boolean> {
    let res = await getTx(txHash,network);
    let value = res.find((element)=> element?.args.to===recipient && element?.args.data && element?.args.amount.toNumber()===amount && ethers.utils.toUtf8String(element?.args.data)===invoiceId);   
    return value?true:false;
}