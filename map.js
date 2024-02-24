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