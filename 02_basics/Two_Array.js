const heros = ['IronMan', 'spiderman', 'captonAmerica', 'Hulk'];
const Dc_heros = ['batman', 'holyboy', 'rickey'];
const id_heros = ['rashul', 'maharaja', 'mehman'];

//heros.push(Dc_heros);

//console.log(heros);

 const all_heros = heros.concat(Dc_heros);
//console.log(all_heros);

// Spread method

const my_heros = [...heros, ...Dc_heros, ...id_heros];
console.log(my_heros);

const multi_array = [1, 2, 3, [5, 6], 7, [4, 5, [6, 9, 8]]];

  const multi_array_one = multi_array.flat(Infinity);
console.log(multi_array_one);

let name = "amnhu";
let age = 56;
let work = 'Developer';
let location = 'Noida';

const User = Array.of(name, age, work, location);
console.log(User);

console.log(Array.from({name: "hitesh"})) // interesting
console.log(Array.from("anshu"));

