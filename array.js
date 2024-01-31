// Number Array declared 
let numbers = [10, 20, 30, 40, 50, 60];

// String Array Declared
const names = ["abul", "Karim", "Jolil", "Kader", "Shalauddin"]

console.log(numbers)
console.log(names)


// Array length
console.log(numbers.length);

// Array Fist child show by index
console.log(numbers[4])

// Add last item in Array list
names.push("Jasim Uddin")
names.push("Sahin", "Masum");

// Add first item in Array list
names.shift("Abdul")

console.log(names)


// Remove last item in Array list 
names.pop()
console.log(names)
names.unshift("Abdul")
console.log(names)

// find indexof in array list 
console.log(names.indexOf("Jasim Uddin"))

const name2 = "my name is jasim "


//Check array
console.log(Array.isArray(names));
console.log(Array.isArray(name2));

