const accountId = 56;

let accountEmail = 'anshusahnai56gmail.com';
var accountPassword = 5656;
/*  ## Note
Prefer not to use var
because of issue in block scope and functional scope;

*/
accountCity = 'Madhuban';
let accountState; // value is not defind so out put is undefined.

// accountId = 65;  ## this is not valid because const variable is constant so is can not be changable.



accountEmail = 'avinashsahnai56mail.com';
accountPassword = 900;
accountCity = 'kanpur';

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);



// use varriables and crreate a programe in javascript 

const userName = "Avinash";
let userAge = 56;
let userState = "mau";
let usereducation = 'Garduated';
let userExperiance = 'Fresher';


console.table([userName, userAge, userState, userExperiance, usereducation]);
console.log(`my name is ${userName}. I am ${userAge} years Old. I live in ${userState} i  ${usereducation} from maharaja shuhel dev univercity azamhgah, and ${userExperiance} in web development programming`);