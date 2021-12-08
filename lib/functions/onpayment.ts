export async function onPayment(recipient:string, invoiceId:string) {
    return new Promise<{var:string}>(res => {
      setTimeout(() => {
        console.log("hello",res);
      }, 1000);
    });
  }