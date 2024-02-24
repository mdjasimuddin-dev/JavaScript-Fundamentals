/*
1. Declare Array
2. for loop in array
3. add two array or array.concat() method
4. array.from() method,
5. array.filter() method,
6. array.find() method,
7. array.findIndex() method,
8. array.foreach() method,
9. array.includes() method,
10. array.indexof() method,
11. array.map() method use,
12. array.pop(),shift(),
13. array.push(), unshift(),
13. array.reverse()
14. array.slice(), sort(), splice()
*/



// 01. Number Array declared 
let numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers)
// String Array Declared
const friends = ["abul", "Karim", "Jolil", "Kader", "Shalauddin"]
console.log(friends);


// 02. for loop in array
let city = ["Dhaka", "Rajshahi", "Rangpur", "Barisal", "Naogaon"];
for(let i = 0; i<city.length; i++){
    console.log(city[i]);
}


// 03. add two array or array.concat() method
let ary1 = ["A", "B", "C", "D"];
let ary2 = ["E", "F", "G", "H"];
let addTwoArray = ary1.concat(ary2);
console.log(addTwoArray)


// 4. array.from() method,
let myName = ("JASIM");
// Expected output ['J', 'A', 'S', 'I', 'M']
console.log(Array.from(myName));


// 5. array.filter() use array function method,
let arr = [30, 40, 50, 37, 20];
let result = arr.filter((item) => item>20);
console.log(result)


// array.filter() use normal function method,
let arr1 = [30, 40, 50, 37, 20];
function Check(value){
    return value>20;
}
let newArr = arr1.filter(Check);
console.log(newArr)



const products = [
    {id:"01", name : "Lenevo",price : 32511,},
    {id:"02",name : "Samsung",price : 25441,},
    {id:"03",name : "Realme",price : 58444,}
]
    //get a product price from array
const itemPrice = products.filter(item=>item.price>26000);
console.log(itemPrice);




// 6. array.find() method,
let arr2 = [30, 40, 50, 37, 20];
let resultArr2 = arr2.find((element)=> element>20);
console.log(resultArr2);




/* 7. array.findIndex() method,
* show the first large number index from array
*/
let arr3 = [5, 12, 8, 130, 44];
let resultArr3 = arr3.findIndex((element)=> element>20);
console.log(resultArr3);


// 08 array.foreach() loop method,
let arr4 = ["A", "B", "C", "D", "E"];
arr4.forEach((element)=>console.log(element));

// forEach() loop 
const arr5 = [5, 12, 8, 130, 44];
arr4.forEach(function(fetch){
    console.log(fetch)
})



// 9. array.includes() method,
let arr6 = [5, 12, 8, 130, 44];
console.log(arr6.includes(72))
// Expected output : false


let arr7 = [1, 2, 3];
console.log(arr6.includes(2));
// Expected output: true

const arr8 = ['cat', 'dog', 'bat'];
console.log(arr8.includes('cat'));
// Expected output: true

console.log(arr8.includes('at'));
// Expected output: false;




// 10. array.indexof() method,
const arr9 = ['ant', 'bison', 'camel', 'duck', 'camel','bison'];
console.log(arr9.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(arr9.indexOf('bison', 2));
// Expected output: 4

console.log(arr9.indexOf('giraffe'));
// Expected output: -1




// 11. array.map() method use
const products2 = [
    {id:"01", name : "Lenevo", price : 32511,},
    {id:"02", name : "Samsung", price : 25441,},
    {id:"01", name : "Realme", price : 58444,}
]

const product = products2.map(p => p.name);
console.log(product);
// get product price 
const sells = products.map(item => item.price);
console.log(sells);


const arr10 = [1, 4, 9, 16, 25, 8];
// Pass a function to map
const map1 = arr10.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32, 50, 16]




/* 12. array.pop() ,shift()
* delete the last element form array to use pop() method
* delete the first element from array to use shift() method
*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// Expected output: ['broccoli', 'cauliflower', 'cabbage', 'kale'];
console.log(plants);

plants.shift();
console.log(plants);
// Expected output: Array ['cauliflower', 'cabbage', 'kale']






/* 13. array.push(), unshift(),
* add the last element form array to use push() method
* add the first element from array to use unshift() method
*/
const animals = ['pigs', 'goats', 'sheep'];

const cowAdd = animals.push('cows');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


animals.unshift("Hen");
console.log(animals);
// Expected output: Array ["Hen, "pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]