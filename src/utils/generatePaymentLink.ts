import { PaymentDetails } from "../types";


export function generatePaymentLink({recipient, amount, reason, category, vendorData}:PaymentDetails) : string {
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

    const input = JSON.stringify(codeObj);
    const buff = Buffer.from(input);
    const base64input = buff.toString('base64');

    return `${base64input}`;
}