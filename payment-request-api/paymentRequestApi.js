const request = new PaymentRequest(
  paymentFunction(), cartFunction()
);
request.canMakePayment().then(result => {
  if (result) {
    request.show().then(paymentResponse => {
      console.log(paymentResponse.details);
      // Here we would process the payment. For this demo, simulate immediate success:
      paymentResponse
        .complete("success")
        .then(() => (thankYouMessage.style.opacity = 1));
    });
  }
});
