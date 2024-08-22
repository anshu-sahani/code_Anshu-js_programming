// for loops
const myArray = ['anshu', 'hitesh', 'ram', 'mohan'];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

for (let index = 1; index <= 10; index++) {
    console.log(`Output value ${index}`);
   for (let i = 1; i <= 10; i++) {
    const element = [i];
    console.log(`${index} * ${i} = ${index * i}`);
    
   }
    
};

// break and continue
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
     if (element == 5) {
        console.log('detected five 5');
        break;
        
     }      
     console.log(element);
     
    }
for (let index = 0; index< newArray.length; index++) {
    const element = newArray[index];
    if (element == 5) {
        console.log('deleted 5');
        continue;
    } 
    console.log(element);
    
}