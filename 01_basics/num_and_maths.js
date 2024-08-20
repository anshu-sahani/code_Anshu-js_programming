const score = 566;

console.log(typeof score);

const number = new Number(555);
const otherNum = number.valueOf();

console.log(typeof otherNum +     '     other number');


console.log( typeof number);

const num = Number(555);
console.log(typeof num);

console.log(num.toFixed(2));

const decNumer = 56.6558;

console.log(decNumer.toPrecision(3));

const maches = 100000000;

console.log(maches.toLocaleString());
  

///++++++++++++++++++++++++   Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.random());

const min = 10;
const max  = 20;

console.log(Math.floor((Math.random()*(max-min +1))) +min);



