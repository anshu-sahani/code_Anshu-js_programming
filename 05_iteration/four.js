// for in loops

const myObj = {name: "anshu", age: 56, class : "inter", batch: "A"};
for (const key in myObj) {
   //  console.log(`${key } and value is ${myObj[key]}`);
     
}
//array
const myArray = ['js', 'java', 'html', 'cass', 'node js', 'typeScript'];
for (const key in myArray) {
   //console.log(key);
   
}
for (const key in myArray) {
  //  console.log(myArray[key]);
    
}

const map  = new Map();
map.set("In", "India");
map.set("En", "england");
map.set('Fr', "France");

for (const key in map) {
    console.log(key);
    
}