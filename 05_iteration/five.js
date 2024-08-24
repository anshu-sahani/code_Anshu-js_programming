// foreach loops
const myArray = ['js', 'rb', 'python', 'java', 'next'];
myArray.forEach(function (items) {
   // console.log(items);
    
});
myArray.forEach((items, index, arry) => {
    console.log(index, items, arry);
    
});

const arr = [
    {
        name: 'anshu',
        department : "It"
    },
    {
        name : "ramu",
        department: "civil",
    },
    {
        name: "raju",
        department: 'bussiness'
    }, 
    {
        name: "raghav",
        debugger: 'sales'
    }
];

arr.forEach((value) => {
    console.log(value);
    
})