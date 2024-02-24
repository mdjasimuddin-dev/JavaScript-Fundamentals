const products = [
    {
        id:"01",
        name : "Lenevo",
        price : 32511,
    },
    {
        id:"02",
        name : "Samsung",
        price : 25441,
    },
    {
        id:"01",
        name : "Realme",
        price : 58444,
    }
]


/*
    get name all object form array
*/
const product = products.map(p => p.name);
console.log(product);

/*
    get price all object form array
*/
const sells = products.map(item => item.price);
console.log(sells);


const array1 = [1, 4, 9, 16, 25, 8];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]