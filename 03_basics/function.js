const array = [100, 202, 300, 400, 500];

function getArray(number) {
               console.log(number[2]);
}
// getArray(array);
// getArray([
//     555, 565, 655, 655, 666, 656
// ]);

const object = {
    name : "anshu",
    age : 56,
    city: "mau",
    nationality: "indian",
}

function getObject(user) {
    console.log(`My name is ${user.name}, I am ${user.age} years old, i belonges to ${user.city} `);
};
// getObject(object);
// getObject({
//     name: "avinash",
//     age: 65,
//     city: 'noida',
// })


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))