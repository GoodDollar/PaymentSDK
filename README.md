# PaymentSDK
SDK for payment backends (marketplaces etc)

#### Motivation : 

Using this SDK sellers will be able to process Gooddollar payments through our API.

For example:
A Seller like e-commerce for "brand" would like to be able to request payment from his customers at Gooddollar.

### Details
#### Seller API
A typescript NPM module that works both on browser/node that implements the following methods
```
generatePaymentLink(PaymentDetails:string)
```

Creates a payment link.
#### Example:
http://wallet.gooddollar.org:3000/? code=eyJtIjoiM2RQQjRxUjNBZUoyY0tzalJnYWp3dE1hUms3TjI0aFVMZzYiLCJhIjoiM...
the query param code is the base64 encrypted value returned from generateCode.

The generated code should return an object with the paymenDetails params and the ones that we already have

Example:
```
{
  "m":"3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6",
  "a":"22200",
  "r":"afds",
  "cat":"Digital Services"
}
```
  
```
generatePaymentQR(PaymentDetails):image
```

Same as above but create a QR containing the payment link from the generatePaymentLink method described above.
Returns Data URL link (in string format).


```
validateTx(TxData):boolean
```

Reads fuse blockchain for txhash and check it has a Transfer log with the amount + sha3(invoiceid/data) paid to recipient in event log data                           

Listens to Transfer event with to=recipient and data=sha3(invoiceid/data)
resolves promise once event detected
Types
```
PaymentDetails: {
  recipient,
  amount,
  reason,
  category,
  invoiceId,
  data?,
  sellerName?,
  sellerWebsite?,
  callbackurl
}
```
```
TxData: {
  txHash,
  recipient,
  amount
  invoiceId,
  data?
}
```