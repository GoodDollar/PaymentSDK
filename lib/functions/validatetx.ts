export class TxData{
    txHash: string

    recipient: string

    amount: number

    invoiceId: string

    category: string

    data?: string

    constructor(txHash: string,recipient: string, amount: number, invoiceId: string, category: string, data: string) {
    this.txHash = txHash
    this.recipient = recipient
    this.amount = amount
    this.invoiceId = invoiceId
    this.category = category
    this.data = data     
    }
}
export function validateTx(TxData:TxData):boolean{
    console.log(TxData);
    return true;
}