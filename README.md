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
Data URL {coverted to Image}
![DataURLImage](https://user-images.githubusercontent.com/43072879/153191038-621883c7-d9c1-4402-b3a0-495f52667caa.png)


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