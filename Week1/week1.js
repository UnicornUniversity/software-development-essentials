//this is a comment. It will not be executed.

//this is a variable. We declare it and assign a value;
var x = 100;
console.log(`x=${x}`)

//this variable declared but unassigned
//note: in Console, its value is 'undefined'.
var y;
console.log(`y=${y}`)

//you can change its value
x = 200;
console.log(`x=${x}`)

//you even can assign a value of different type, however, DO NOT THIS. It is a bad practice.
x = "don't do it please"
console.log(`x=${x}`)

//this is a constant. We must assign it when declare and its value can't be changed.
const cnts = "I am a constant";

//LOOPS

//with known number of iterations
//note: "let i" means we define "i" variable in local scope
for(let i = 0; i < 5; i++){
    console.log(`i=${i}`)
}

//until condition is true
// a++ means a = a + 1. Simply increase this variable on 1.
var a = 0;
while(a < 5){
    console.log(`a=${a}`)
    a++;
}

var b = 0;
do{
    console.log(`b=${b}`)
    b++;
}
while(b < 5)








