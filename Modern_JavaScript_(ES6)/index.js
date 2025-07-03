// 01 Hello World
console.log('Hello World');


// 02 Use Strict mode
// 'use strict'
function myFunction() {
    let name = 'Md Jasim Uddin'
    console.log(name);
}
myFunction()


// 03 spreed operator
let poorCountry = ['Bangladesh', 'Shreelanka']
let richCountry = [...poorCountry, 'America', 'Canada', 'Malasiya']
console.log(richCountry);


// 04 push in array
let city = ['Dhaka', 'Rajshahi', 'Chittagong']
let newCity = ['Khulna', 'Dinajpur', 'Barisal']

city.push("Comilla")
city.push(newCity)

console.log(city);


// Rest Parameter
function resParameter(...numbers) {
    let sum = 0
    for (let i of numbers) {
        sum = sum + i
    }
    console.log('Total', sum);
}

resParameter(1, 2, 3, 4)



// Dynamic Function 
const dynamicFunction = function resParameter(num1, num2) {
    let sum = num1 + num2
    console.log('Total Sum is :', sum);
}

dynamicFunction(25, 30)


// Variable Hoisting
// name = 'Md Atikul Islam'
// let name
// console.log(name);



//Simple For Loop
let sum = 10;

for (let i = 1; i <= 10; i++) {
    console.log(`Sorry ${i} `);
}


// For of loop in Array
let myCity = ['Dhaka', 'Rajshahi', 'Chittagong', 'Rangpur', 'Barisal', 'Khulna']

for (let city of myCity) {
    console.log(city);
}



// Object with for in loop
const myObject = {
    name: 'Md Jasim Uddin',
    email: 'mdjasimuddin.dev@gmail.com',
    age: 23,
    occupation: 'student'
}

for (myObj in myObject) {
    console.log(myObject[myObj]);
}



// Rest parameter function

function totalSum(...numbers) {
    let sum = 0
    for (let i of numbers) {
        sum = sum + i
    }
    console.log('Total Sum : ', sum);
}

totalSum(1, 2, 3)


// Function Return 
function funcOne() {
    return 20
}

function funcTwo() {
    return funcOne()
}

console.log('Return :', funcTwo());

