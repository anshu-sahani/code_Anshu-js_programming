// Immediately Invoked Function Expressions (IIFE)

// why use of iife 
// globe scope polute the function and i immediately run the function so i can use iife ,

(function one() {
    console.log('DB Connected');
    
})();

((name) => {
    console.log(`DB connected Two ${name}`);
    
})('anshu');