function convertFeet (inche){
    const feet = inche / 12;
    const feetResult = parseInt(feet);
    const inchiRemain = inche % 12;
    const result = feetResult + " feet " + inchiRemain + " inchi";
    return result
}

const shuvoHight2 = convertFeet(65)
console.log(shuvoHight2);


// unique item push in array 
let Biriany = ["Abul", "Kabul", "Nirob", "Abul", "Kabul", "Sabur"]


function noDuplicate(array){
    const UniqueList = [];

    for (const item of array){
        if(UniqueList.includes(item)===false){
            UniqueList.push(item)
        }
    }

    return UniqueList;

}


    const uniqueArray = noDuplicate(Biriany);
    console.log(uniqueArray);