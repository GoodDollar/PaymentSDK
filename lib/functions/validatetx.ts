export interface TxData{
    txHash: string

    recipient: string

    amount: number

    invoiceId: string

    category: string

    data?: string

}
export function validateTx(TxData:TxData):boolean{
    return true;
}