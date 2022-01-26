import { PaymentDetails } from "../../types";
import config from "../../Config"
import * as mnid from 'mnid';

export function generatePaymentLink({address, amount, reason, category, vendorData}:PaymentDetails) : string {
    const codeObj = {
        m: '',
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
    codeObj.m = mnid.encode({
        network: `0x${config.network.toString(16)}`,
        address
    })
    const input = JSON.stringify(codeObj);
    const buff = Buffer.from(input);
    const base64input = buff.toString('base64');
    return `${config.linkUrl}${base64input}`;
}