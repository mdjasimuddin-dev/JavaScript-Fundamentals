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
    get a product name from array
*/

const itemName = products.filter(item=>item.price < 30000);
console.log(itemName);

