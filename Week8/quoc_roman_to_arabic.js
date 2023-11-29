//convert roman number to decimal number

// let a = "XXXI";
// let a = "XLVI";
// let a = "XLV";

let romanNumber = "CDL" 

const arrayLetter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToDecimal(num){
    let result = 0;

    for(i = 0; i < num.length; i++){
        let value1 = arrayLetter[num[i]];
        let value2 = arrayLetter[num[i+1]];
    
        if(value1 < value2){
            result -= arrayLetter[num[i]];
        }else{
            result += arrayLetter[num[i]];
        }
    }

    return result;
}

console.log(romanToDecimal(romanNumber));

