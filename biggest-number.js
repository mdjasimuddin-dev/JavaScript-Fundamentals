const largeNum = [20, 30, 50, 80, 65, 55, 79, 75];

function getLarge(numberList){
    let max = numberList[0]
    for(let num of numberList){
        if(num > max){
            max = num;
        }
    }
    return max
}

const large = getLarge(largeNum);
console.log("This is a largest number : ",large)