import { PaymentDetails } from "../../types";
import { generatePaymentLink } from "./generatePaymentLink";
import * as QRCode from 'qrcode'


export function generatePaymentQR(PaymentDetails:PaymentDetails) : Promise<string> {
    let link = generatePaymentLink(PaymentDetails);
    let res = QRCode.toDataURL(link)
    .then((url:any) => {
      return url
    })
    .catch((err:any) => {
      return err
    })
    return res;
}