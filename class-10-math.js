// 01. Math.abs() method
function difference(a, b) {
    return Math.abs(a - b);
}

console.log(difference(3, 5));
  // Normal Math output : -2
  // Expected output: 2

console.log(difference(5, 3));
  // Expected output: 2

console.log(difference(1.23456, 7.89012));
//    Normal Math Output : -6.6555599999999995
//   Expected output: 6.6555599999999995


// 02. Ceil() Method Use 
console.log(Math.ceil(0.95));
// Expected output: 1
console.log(Math.ceil(7.004));
// Expected output: 8


// 03. floor() Method use
console.log(Math.floor(1.25))
console.log(Math.floor(1.99))


// 04. math.max() method use
console.log(Math.max(1, 2, 4, 10, 5, 55))


// 04. math.max() method use
console.log(Math.min(1, 2, 4, 10, 5, 55));


// 05. math.random() method use
console.log(Math.ceil(Math.random() *8888));


// 06. math.round() method use
console.log(Math.round(0.51))
console.log(Math.round(15.49))
console.log(Math.round(15.50))