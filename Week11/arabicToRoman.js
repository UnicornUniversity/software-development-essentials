const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convert(arabicNum){
    let romanResult = "";
    let currentValue = arabicNum;
    while(currentValue > 0){
        for(let index = 0; index < arabic.length; index++){
            if (currentValue >= arabic[index]){
                romanResult += roman[index];
                currentValue -= arabic[index];
                break;
            }          
        }
    }
    return romanResult;
}

console.log(convert(6));
console.log(convert(21));
console.log(convert(46));
console.log(convert(19));

