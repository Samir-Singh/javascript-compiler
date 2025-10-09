// callback revision

/*
callback is divided into two parts good part of callback and bad part of callback
1. good part of callback is callback is used to write asynchronous code.
2. bad part of callback is inversion of control( means you lose the control of the code you have to dependent on the another function to call your
callback function)
*/

const cart = ["shoes", "shirts", "pants"];

api.createOrder(cart, function () {
  api.paymentInitiated(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
