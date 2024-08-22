const object = new Object(); /// singleton object
const objects = {}; /// non singleton object
const mySym = Symbol('key_One');

const user = {
    name: "anshu",
    "full name" : "anshu sahani",
    age : 56,
    [mySym]: 'My Symbol',
    email: 'anshusahani56gmail.com',
    isLoggedIn: true,
    isLoggedInDay : ['Monday', "friday", 'Sunday']
};




console.log(user);
user.email = 'anshuavinash65hmail.coms';

console.log(user);

console.log(user.name);
console.log(user["email"]);
console.log(user["full name"]);



user.getName = function() {
    console.log(`hello Js User ${this.name}`);
    
}
console.log(user.getName());

console.log(user.isLoggedInDay[2]);
