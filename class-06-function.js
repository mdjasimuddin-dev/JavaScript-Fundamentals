/* function structure 
* use function keyword
* use function name
* call function name
*/

// declare function
function msg (){
    console.log("This is a JavaScrip Function")
}
// call function
msg()


// function argument pass or parameter 
function dynamicName (text){
    console.log("My name is :", text)
}

dynamicName("Jasim");
dynamicName("Kabil");
dynamicName("Habil");



// Return Value in function
function addTwoNumber(){
    let num1 = 25;
    let num2 = 65;
    let sum = num1 + num2;
    return sum
}

console.log(addTwoNumber())

