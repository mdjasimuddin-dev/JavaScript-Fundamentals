var orangePrice = 350;
var applePrice = 100;
var internetBill = '525'
var mobileRecharge = "185.89"
var totalPrice = orangePrice + applePrice;
// convert String to Integer Number
var internel = parseInt(internetBill)

// convert String to Float Number
var mobileBill = parseFloat(mobileRecharge)

var totalBill = totalPrice + internel + mobileBill;
console.log(totalBill.toFixed(3))