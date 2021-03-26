
const sum = (num1, num2) => num1 + num2; 
const PI = 3.14; 

class MyClass {
    constructor(){
        console.log("Constructor Called.. ")
    }
}

// version 1 
// module.exports.sum = sum; 
// module.exports.PI = PI; 


// version 2 
// module.exports = {sum:sum, PI : PI}

// version 3 es6 
module.exports = {sum,  PI, MyClass}
