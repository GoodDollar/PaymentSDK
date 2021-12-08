export interface VendorMetadata {
    callbackUrl: URL
  
    invoiceId: string
  
    website: URL
  
    vendorName: string
}

export interface PaymentDetails{
    recipient: string

    amount: number

    reason: string

    category: string

    vendorData?: VendorMetadata
}


export function generatePaymentLink(PaymentDetails:PaymentDetails) : string {
    const codeObj = {
        m: PaymentDetails.recipient,
        a: PaymentDetails.amount,
        r: PaymentDetails.reason || '',
        cat: PaymentDetails.category,
        ven: {},
    }
    if (PaymentDetails.vendorData!==undefined && PaymentDetails.vendorData!== null) {
        codeObj.ven = {
            cbu : PaymentDetails.vendorData.callbackUrl,
            ind : PaymentDetails.vendorData.invoiceId,
            web : PaymentDetails.vendorData.website,
            ven : PaymentDetails.vendorData.vendorName,
        }
    }

    let input = JSON.stringify(codeObj);
    let buff = Buffer.from(input);
    let base64input = buff.toString('base64');
    return `http://wallet.gooddollar.org:3000/?code=${base64input}`;
}