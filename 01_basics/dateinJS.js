const date = new Date();

// console.log(date);  // output => 2024-08-20T17:10:44.514Z

// console.log(date.toString()); // output => Tue Aug 20 2024 22:41:35 GMT+0530 (India Standard Time)

// console.log(date.toDateString()); // Output => Tue Aug 20 2024

// console.log(date.toISOString()); // out put => 2024-08-20T17:13:00.362Z

// console.log(date.toLocaleDateString()); /// 20/8/2024       (   dd/mm/yy)

// console.log(date.toJSON()); // 2024-08-20T17:14:35.186Z

// console.log(date.toLocaleString());// 20/8/2024, 10:45:47 pm

// console.log(date.toTimeString());   // 22:46:37 GMT+0530 (India Standard Time)


// const newDate = new Date(2024, 7, 20);
// console.log(newDate.toLocaleString()); // 20/8/2024, 12:00:00 am

const newDate = new Date(2024, 7, 20, 10, 50);
console.log(newDate.toDateString()); //Tue Aug 20 2024
console.log(newDate.toLocaleString()); // 20/8/2024, 10:50:00 am

const StriDate = new Date("08-18-2024"); // mm/dd/yy
const createdDate = new Date("2024-08-20");

console.log(StriDate.toLocaleString()); // 18/8/2024, 12:00:00 am
console.log(StriDate.getTime());


const myTime = new Date();

console.log(myTime.getSeconds());


const timeStamp = Date.now();

console.log(timeStamp);


const mynewDate = new Date();

console.log(mynewDate.toLocaleString('default', {
    weekday: "long",
}));









