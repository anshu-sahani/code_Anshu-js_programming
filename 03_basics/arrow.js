const user = {
    username : "avinash",
    email: 'avinashsahani56gmail.com',
    welcomeMass : function() {
        console.log(`${this.username} , Welcome to The Websites`);
        console.log(this);
        
        
    }
}

//user.welcomeMass();
user.username = 'Anshu';
// user.welcomeMass();

// function myfun() {
//     let username =  "anshusahnai";
//console.log(this);// output some value
//     console.log(this.username);// undefind
    
// }

// myfun();


const newFun = function() {
    let username = "anshu";
    console.log(this.username);
    
}

// newFun();
const arrowFun = () => {
    let user = "anshu";
    console.log(this);//  output emputy Object
    console.log(this.username);// undefind
    
}
arrowFun();

const someAdd  = (numOne , numtwo) => {
         return numOne + numtwo;
}
console.log(someAdd(5, 6));


// const addnum = (num , numtwo) => num + numtwo;
const addnum = (num, numtwo) => (num + numtwo);

console.log(addnum(5,5));
// object module
const object = () => ({username : "anshu", age: 56, gender: "male"});
console.log(object());