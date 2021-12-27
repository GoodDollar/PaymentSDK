import { PaymentDetails } from "../../types";
import env from "../../Config"
// import * as mnid from '@types/mnid'


export function generatePaymentLink({address, recipient, amount, reason, category, vendorData}:PaymentDetails) : string {
    const codeObj = {
        m: recipient,
        a: amount,
        r: reason || '',
        cat: category,
        ven: vendorData ? {
            cbu : vendorData.callbackUrl,
            ind : vendorData.invoiceId,
            web : vendorData.website,
            ven : vendorData.vendorName
        } : {},
    }
    // const id = mnid.encode({ address, network: env.network })
    // console.log(id)
    const input = JSON.stringify(codeObj);
    const buff = Buffer.from(input);
    const base64input = buff.toString('base64');

    return `${env.linkUrl}${base64input}`;
}