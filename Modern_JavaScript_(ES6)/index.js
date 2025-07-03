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
console.log('Return :', funcTwo())



// Anonymous Function 
let AnonyFuncEx = function (name) {
    return name
}

console.log(AnonyFuncEx('My name is Anonymous Function'));



// Arrow Function 
let ArrowFuncEx = (name) => {
    return name
}

console.log(AnonyFuncEx('This is Arrow Function'));



// Contractor Array Function 
// simple array ====== let myCity = ['Dhaka', 'Rajshahi', 'Chittagong']
let contractorArrayEx = new Array('Dhaka', 'Rajshahi', 'Chittagong', 'Rangpur', 'Barisal', 'Khulna');

for (let item of contractorArrayEx) {
    console.log("Contractor array :", item);
}


// MultiDimentional Array
let Banglaesh = ['Dhaka', 'Rajshahi', 'Rangpur', 'Khulna', 'Barisal', 'Chittagong']
let India = ['Delhi', 'Rajstan', 'Hyderabad', 'Kolkata']
let Pakistan = ['Karachi', 'Panjab', 'Kashmir',]

let Asia = [Banglaesh, India, Pakistan]
console.log(Asia[2][2]);


// Array De structure 

let deStructure = ['Dhaka', 'Rajshahi', 'Rangpur',]
let [a, , c] = deStructure

console.log('Destructure : ', a, c);



// map 

let myMap = new Map()

myMap.set('county1', 'Bangladesh')
myMap.set('county2', 'India')
myMap.set('county3', 'Pakistan')
myMap.set('county4', 'Maldiv')
myMap.set('county4', 'Nepal')
myMap.set('county5', 'Bhutan')
myMap.set('county6', 'Srilanka')
myMap.set('county7', 'China')

console.log(myMap);
// see value 
for (let ctry of myMap.values()) {
    console.log("Map Value :", ctry);
}


// class create and use 


class myClass {
    myFunc = (name) => {
        console.log(name);
    }
    myFunc2 = (name) => {
        console.log(name);
    }
    myFunc3 = (name) => {
        console.log(name);
    }
    myFunc4 = (name) => {
        console.log(name);
    }
}


var obj = new myClass()
obj.myFunc('This is class')
obj.myFunc2('This is class2')
obj.myFunc3('This is class3')
obj.myFunc4('This is class4')






// constructor 
class newClass {
    constructor() {
        console.log("This is a constructor");
    }
}


new newClass


// inheritance

class inheritanceEx {

    hello(params) {
        console.log(params);
    }
    hello2(params) {
        console.log(params);
    }
}


class child extends inheritanceEx {

}


var obj = new child()
obj.hello('Inheritance 1st Func')



