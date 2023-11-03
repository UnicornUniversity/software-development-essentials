const read = 4;     //00000 100
const write = 2;    //00000 010
const execute = 1;  //00000 001

let myPermissions = 0;
myPermissions = read | write; 
console.log(myPermissions);
//6 => 110
//e => 001
//r => 100

console.log("read permission? => " + (myPermissions & read ? "yes" : "no"))
console.log("write permission? => " + (myPermissions & write ? "yes" : "no"))
console.log("execute permission? => " + (myPermissions & execute ? "yes" : "no"))
