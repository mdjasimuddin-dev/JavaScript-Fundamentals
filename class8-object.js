// object structure declare
let person={
    Name : "Md Jasim Uddin",
    Age : 21,
    City : "Naogaon",
    Country : "Banladesh",
    education : {
        PSC : {
            School_Name : "Mundikhair Primary School",
            Result : "GPA-3.83"
        },
        JSC : {
            School_Name : "Verendy High School",
            Result : "GPA-4.65"
        },
        SSC : {
            School_Name : "Verendy High School",
            Result : "GPA-4.83"
        },
        Diploma : {
            School_Name : "Chpainawabganj Polytechnic Institute",
            Result : "CGPA-3.30"
        }
    }
}

console.log(person);


// show city value from object property 
console.log(person.City);
// show Diploma Result from object property
console.log(person.education.Diploma.Result);
