//condition if else ststement
// <, >, <=, >=, ==, !=, ===, !==
const name = 'ANhsu';
if(name) {
    console.log('name is true');
}

const username = '';
if(username.length !== 0) {
    console.log(`hello ${username} , welcome to the website`);
} else {
    console.log("Enter your username ");
    
}

//empty Object
const emptyObj = {};
if (Object.keys(emptyObj).length !== 0) {
    console.log('hello object is not empty');
}else {
    console.log('object is empty');
    
}

// if else if statement
const month = 'feb';
if (month === "Jan") {
    console.log('January');
} else if (month === "feb" ) {
    console.log("Febuary");
    
} else if (month === "March") {
     console.log("March");
     
} else if (month === "aprail") {
    console.log("Aprail");
    
} else if (month === "May") {
    console.log("may");
    
} else {
    console.log("Out of the monct columb");
    
}

// and  or statement

const userLoggedIn = true;
const userEmail = true;
const debitCard = true;

if (userEmail && userLoggedIn && debitCard) {
    console.log('Hello User you are successfully loggin In this website');
    
}

const LoggedIn = true;
const debitCards = false;
const creditCard = false;
if (LoggedIn &&  debitCards || creditCard) {
    console.log('user logged in successfuly');
}

