import { getTx } from '../web3/ether';
import { TxData } from '../../types';


export function validateTx(txData:TxData):Promise<string>{
    let res = getTx(txData.txHash)
             .then((val:any)=>{
                let value = val.map((v:any)=>{
                    if(v) {
                        return v;
                    }
                 })
                 return value;
             })
             .catch((err:any)=>{
                 return err;
             });
    return res;
}