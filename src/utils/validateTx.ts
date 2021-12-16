import { getTx } from '../ether';
import { TxData } from '../types';


export function validateTx(TxData:TxData):Promise<string>{
    let res = getTx(TxData.txHash)
             .then((val:any)=>{
                let value = val.map((v:any)=>{
                    if(v) {
                        console.log(v.args.to);
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