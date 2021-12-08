export class VendorMetadata {
    callbackUrl: URL
  
    invoiceId: string
  
    website: URL
  
    vendorName: string
  
    static CALLBACK_URL_SHORT = 'cbu'
  
    static INVOICE_DATA_SHORT = 'ind'
  
    static WEBSITE_SHORT = 'web'
  
    static VENDOR_SHORT = 'ven'
  
    constructor(callbackUrl: URL, invoiceId: string, website: URL, vendorName: string) {
      this.callbackUrl = callbackUrl
      this.invoiceId = invoiceId
      this.website = website
      this.vendorName = vendorName
    }
  
    /**
     * Converts a [VendorMetadata] object to a concise form for shorter base64 compression
     *
     * @returns A concise form of the vendor metadata.
     */
    public toConcise(): Object {
      type Data = {
          cbu : URL;
          ind : string;
          web : URL;
          ven : string;
      }
      let response = {} as Data;
      response.cbu = this.callbackUrl
      response.ind = this.invoiceId
      response.web = this.website
      response.ven = this.vendorName
      return response
    }
    
  }
export class PaymentDetails{
    recipient: string

    amount: number

    reason: string

    category: string

    vendorData?: VendorMetadata

    constructor(recipient: string, amount: number, reason: string, category: string, vendorData: VendorMetadata) {
        this.recipient = recipient
        this.amount = amount
        this.reason = reason
        this.category = category
        this.vendorData = vendorData
    }
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
        const val = new VendorMetadata(PaymentDetails.vendorData.callbackUrl,PaymentDetails.vendorData.invoiceId,PaymentDetails.vendorData.website,PaymentDetails.vendorData.vendorName);
        codeObj.ven = val.toConcise();
    }

    let input = JSON.stringify(codeObj);
    let buff = Buffer.from(input);
    let base64input = buff.toString('base64');
    return `http://wallet.gooddollar.org:3000/?code=${base64input}`;
  }