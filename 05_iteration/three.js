// for of loops
// array loops
const arry = ['hava', 'hidh', 'rana', 'kishor', 'roji'];
for (const output of arry) {
  ///  console.log(`${output}`);
}
//string 
const greeting = 'hello worlds , my name is Anshu';
for (const myWords of greeting) {
    if (myWords == ' ') {
        continue;
    }
    if (myWords == ',') {
        continue;
    }
  //  console.log(myWords);
    
}

// map
const map = new Map();
map.set("In", "India");
map.set("En", "England");
map.set("Fr", "France");
map.set('Sr', "srilanka");

console.log(map);

for (const key of map) {
//   console.log(`Map Keys ${key}`);     
}
for (const [key] of map) {
    //console.log(key);
    
}
for (const [key, value] of map) {
   // console.log(`${key} :- ${value}`);
    
}

// object
const myObj  = {
    name : 'anshu',
    age : 56,
    city: "mau",
    position: "fresher",
}
for (const value of myObj) {
    console.log(value);// object is not iterateable
    
}