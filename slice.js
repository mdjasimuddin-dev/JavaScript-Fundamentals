// Slice() method use 

const address = "Niamatpur";
const part = address.slice(6,9);
console.log(part);


// split() method use
const sentencs = "Hi, I am md jasim Uddin, I am a computer engineer";
console.log(sentencs.split(" "))



// split() and join() method use

const friends = " Karim, Sagor, kader, jalal, Nasim, Sahin";
const friendsStr = friends.split(",")
console.log(friendsStr);


const nameList = friendsStr.join("-");
console.log(nameList)



// concat() method use
const first = "Md";
const middle = "Jasim";
console.log(first.concat(" ").concat(middle));


// include() method use
const word = "abcdefghij";
const data = word.includes("l")
console.log(data)
