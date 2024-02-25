const birthDay = new Date('21 Dec 2001');
let day1 = birthDay.getDate()
console.log(day1);


let months1 = birthDay.getMonth();
console.log(months1);


let year1 = birthDay.getFullYear();
console.log(year1);


//let dayArray = ["Sunday", "Monday", "tuesday", "wednesday", "Thursday", "Friday", "Saturday" ]
// index start 0-6

let today = new Date();
let getDay = today.getDay();
console.log(getDay);


//let monthsArray = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December" ]
// index start 0-11
let getMonth = today.getMonth();
console.log(getMonth);

let getYear = today.getFullYear();
console.log(getYear)