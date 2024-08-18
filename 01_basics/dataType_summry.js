// two type of data types

//  Primitive DataType
// Seven type of primitive datatypes
// String, Number, Boolean, Null, Undefined, Symbol, Bigint


const name = "anshu"; // string
let score = 566; // number
let isLoggedIn = true // boolean
let NewTemp = null; // Null
let userEmail; // undefined
let id = Symbol('56');
let anotherId = Symbol('56'); //  symbol

console.log(id === anotherId);

let largeNum = 154546653256154641451454514654n // BigInt


// Reference (non - primitive) datatype

// Array,  Objects, Functions

// Array
const array = ['ram', 'mohan', 'shyam', 'kaju'];

// Object
let newObj = {
    name: "nahu",
    age: 56,
    city: "mau",
    state: 'utter pradesh'
};

// function

let myFun = function() {
    console.log('hello Anshu');
    
}

console.log(typeof NewTemp);
