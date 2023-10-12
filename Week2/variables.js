var x = 100;
b = "test";

console.log(`x before=${x}`);

console.log("-----------");
for(let i = 0; i < 3; i++){
    let x = 999; 

    console.log(`x=${x}`);
    console.log(`b=${b}`);
    console.log(`i=${i}`);

    var y = 200;
}
console.log("-----------");

console.log(`x after=${x}`);

//Error! i is not defined
//console.log(`i outside =${i}`)

console.log(`y=${y}`);
