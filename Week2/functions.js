
//returns nothing, just prints a string in Console
function helloWorld(){
    console.log("Hello, World!");
}

function sum(a, b){
    return a + b;
}

function multiply(c, d){
    return c * d;
}

let result = multiply(5, sum(2, 3));
console.log(result);
