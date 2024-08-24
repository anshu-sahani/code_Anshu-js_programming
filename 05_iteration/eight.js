const num = [1, 2, 3, 4, 5];
const sumTotal = num.reduce((acc, value) => {
          return acc + value;
},0);
//console.log(sumTotal);

const shoppingCart = [
    {
        product: 'faceWash',
        price: 450,
    },
    {
        product: "kitechen tools",
        price: 565,
    },
    {
        product: 'clothes',
        price: 201,
    },
    {
        product: "apple",
        price: 200,
    },

];

const totalPrice = shoppingCart.reduce((acc, currentValue) => {
    console.log(`${currentValue.product}, and Price ${currentValue.price}`);
    return acc + currentValue.price;
}, 0);
console.log(totalPrice);

