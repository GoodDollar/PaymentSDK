# PaymentSDK
SDK for payment backends (marketplaces etc)

#### Motivation : 

Using this SDK sellers will be able to process Gooddollar payments through our API.

For example:
A Seller like e-commerce for "brand" would like to be able to request payment from his customers at Gooddollar.

### Details
#### Seller API
A typescript NPM module that works both on browser/node that implements the following methods

##### Method 1
```
generatePaymentLink(PaymentDetails:string)
```

Creates a payment link.

##### How to use?
###### Example Input:
```
  var result = generatePaymentLink({
    address:'0x00521965e7bd230323c423d96c657db5b79d099f',
    recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',
    amount:'22200',
    reason:'afds',
    category:'Digital Services',
    vendorData:{
      callbackUrl:'www.google.com',
      invoiceId:'abcd'
    }
  });
```
The result variable will store the expected output i.e. Payment Link.
###### Example Output:
[http://wallet.gooddollar.org:3000/? code=eyJtIjoiM2RQQjRxUjNBZUoyY0tzalJnYWp3dE1hUms3TjI0aFVMZzYiLCJhIjoiM...]()
the query param code is the base64 encrypted value returned from generateCode.

The generated code will return an object with the paymenDetails params and the ones that we already have

Example:
```
{
  "m":"3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6",
  "a":"22200",
  "r":"afds",
  "cat":"Digital Services"
}
```
##### Method 2
```
generatePaymentQR(PaymentDetails):DataURL
```
Same as above but create a QR containing the payment link from the generatePaymentLink method described above.
Returns Data URL link (in string format).

##### How to use?
###### Example Input:
```
  var result = await generatePaymentQR({
    address:'0x00521965e7bd230323c423d96c657db5b79d099f',
    recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',
    amount:'22200',
    reason:'afds',
    category:'Digital Services',
    vendorData:{
      callbackUrl:'www.google.com',
      invoiceId:'abcd'
    }
  });
```
###### Example Output:
```
data:image/png;base64,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
```
##### Method 3
```
validateTx(TxData):boolean
```

Reads fuse blockchain for txhash and check it has a Transfer log with the amount + sha3(invoiceid/data) paid to recipient in event log data.                          

Listens to Transfer event with to=recipient and data=sha3(invoiceid/data)
resolves promise once event detected.

##### How to use?

###### Example Input:
```
var result = await validateTx({
  txHash:"0x16d3c01a2786ce2022ef036ed122c5ff38b1809bf14302c3b89de73cbcbcac8d",
  recipient:"0x2FaDA5F33728761648dAB4BE25BF0fE831B9dD34",
  amount:500,
  invoiceId:"receipt-id-3938383"
});
```

###### Example Output :
```
true
```


##### Types
```
PaymentDetails {
  address: string,
  recipient: string,
  amount: number,
  reason: string,
  category: string,
  vendorData?: VendorMetadata
}
```
```
VendorMetadata {
  callbackUrl: URL,
  invoiceId: string,
  website: URL, 
  vendorName: string
}
```

```
TxData {
  txHash: string,
  recipient: string,
  amount: number,
  invoiceId: string,
  network?: string
}
```