// if Else condition 

var num = 8;
if(num<15){
    console.log("This is a Valid Number");
}else{
    console.log("Please Enter a Valid Number");
}


// Multiple condition
var height = 166;
var salary = 25000;
var isBCS = true;

// && operator use in this condition 

if (height>165 && salary>25000){
    console.log("This person is my crash");
}else{
    console.log("This is a simple person");
}

// || operator use in this condition 
if (height>165 || salary>25000){
    console.log("This person is my crash");
}else{
    console.log("This is a simple person");
}




// product price discount by any condition 

var price = 900;
var age = 2500;

if(age<=8){
    console.log("My product is free");
}
else if(age>8 && age<=18){
    var discountPrice = (price *50)/100;
    var payable = price-discountPrice;
    console.log("Your payable balance is : "+payable + " TK for 50% discount")
}
else if(age>18 && age<=45){
    var discountPrice = (price *5)/100;
    var payable = price-discountPrice;
    console.log("Your payable balance is : "+payable + " TK for 5% discount");
}

else if(age>45 && age<=55){
    var discountPrice = (price *25)/100;
    var payable = price-discountPrice;
    console.log("Your payable balance is : "+payable + " TK for 25% discount");
}

else if(age>55 && age<=70){
    var discountPrice = (price *75)/100;
    var payable = price-discountPrice;
    console.log("Your payable balance is : "+payable + " TK for 75% discount");
}

else if(age>70 && age<=100){
    var discountPrice = (price *100)/100;
    var payable = price-discountPrice;
    console.log("Your payable balance is : "+payable + " TK for 100% discount");
}
else{
    console.log("My product is Free")
}








// Nested if Else condition 
var years = 18;
var isNID = true;
var isVoterSl = true;
if (years>=18){
    if(isNID==true){
        if(isVoterSl==true){
            console.log("Vote Daw")
        }
        else{
            console.log("Please give show me voter sl no")
        }
    }
    else{
        console.log("Please show me NID card")
    }
}else{
    console.log("Your are a not voter. Please wait...")
}







// ternary Operator condition

var applePrice = 140;
applePrice<=250 ? console.log("2 KG nibo") : console.log("0.5 KG nibo");