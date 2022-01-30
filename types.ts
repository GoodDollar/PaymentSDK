export interface TxData{
    txHash: string
    recipient: string
    amount: number
    invoiceId: string
    network?: string
}

export interface VendorMetadata {
    callbackUrl: URL
    invoiceId: string  
    website: URL 
    vendorName: string
}

export interface PaymentDetails{
    address: string
    recipient: string
    amount: number
    reason: string
    category: string
    vendorData?: VendorMetadata
}