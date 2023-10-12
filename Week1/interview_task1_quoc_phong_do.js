/*
Issue:
Array (7,11,15,22); target = 18
Find index of 2 numbers those sum equal target (=18)

example: 
array (7,11,15,22); target = 18
output: (0,1)
*/

//declare variable
let inputArray = [7, 11, 15, 22]; //input array
let outputArray = []; //output array which contains set of 2 index of 2 numbers those sum equal target (=18)

//let inputArray = [7,11,15,22,3,7,7,-4]; //other array to check the solution

//loop input array
for (i = 0; i < inputArray.length; i++) {
  for (j = i + 1; j < inputArray.length; j++) {
    //check sum of 2 numbers equal target or not
    if (inputArray[i] + inputArray[j] == 18) {
      //if sum of 2 numbers equal target, push their index to output array
      outputArray.push("(" + i + ", " + j + ")");
    }
  }
}

console.log(outputArray);
