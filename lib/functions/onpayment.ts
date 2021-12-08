export async function onPayment(recipient:string, invoiceId:string) {
    return new Promise<{var:string}>(res => {
      setTimeout(() => {
        //this is just a testing function as of now hence using console
        console.log("hello",res);
      }, 1000);
    });
  }