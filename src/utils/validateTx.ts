import { getTx } from '../web3Data';
import { TxData } from '../../types';
import { ethers } from 'ethers';


export async function validateTx({txHash,recipient,amount,invoiceId,network}:TxData):Promise<boolean> {
    let res = await getTx(txHash,network);
    let value = res.find((element)=> element?.args.to===recipient && element?.args.data && element?.args.amount.toNumber()===amount);   
    return ethers.utils.toUtf8String(value?.args.data)===invoiceId;
}