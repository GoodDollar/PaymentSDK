interface PaymentDetails {
    recipient: string;
    amount: number;
    reason: string;
    category: string
    invoiceId: string;
    data? : string;
    sellerName? : string;
    sellerWebsite? : string;
    callbackurl : string;
}

export function generatePaymentLink(PaymentDetails: PaymentDetails) : string {
    console.log(PaymentDetails);
    return " ";
}