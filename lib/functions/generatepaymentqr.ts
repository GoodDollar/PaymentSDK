import { PaymentDetails, generatePaymentLink } from "./generatepaymentlink";

var QRCode = require('qrcode')

export function generatePaymentQR(PaymentDetails:PaymentDetails) : string {
    var link = generatePaymentLink(PaymentDetails);
    var res = QRCode.toString(link,{type:'terminal'}, function (err: any, url: any) {
      return url;
    })
    return res;
}