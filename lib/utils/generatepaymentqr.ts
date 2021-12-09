import { PaymentDetails } from "../types";
import { generatePaymentLink } from "./generatepaymentlink";

var QRCode = require('qrcode')

export function generatePaymentQR(PaymentDetails:PaymentDetails) : Promise<string> {
    var link = generatePaymentLink(PaymentDetails);
    var res = QRCode.toDataURL(link)
    .then((url:any) => {
      return url
    })
    .catch((err:any) => {
      return err
    })
    console.log(res)
    // console.log("result here:");
    // console.log(res);
    return res;
}