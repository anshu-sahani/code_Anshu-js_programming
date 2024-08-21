const arry = [0, 1, 2, 3, 4, 5]

console.log(typeof arry);

arry.push(6);

console.log(arry);

arry.pop(); // remove last position element
console.log(arry);
arry.shift();  // remove zeroth position element
console.log(arry);
arry.unshift(7); // elemnt add in array from start;
console.log(arry);;

console.log(arry.includes(9));// check element present or not then give true ar false
console.log(arry.indexOf(5));

const newArray = arry.join();
console.log(newArray); // 
console.log(typeof newArray);  // string

// slice and splice 

const myArray = ['jan', 'feb','march', 'aprail', 'may'];

 const sliceArray = myArray.slice(2, 5);
console.log("a" ,myArray);
console.log("b",sliceArray);

myArray.splice(5,0,'june');
console.log(myArray);
myArray.splice(1,1, 'February');
console.log(myArray);







