const input = [2, 7, 11, 15];
const target = 18;

function findIndexes(){
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input.length; j++){
            if (i === j) continue;
            const v1 = input[i];
            const v2 = input[j];
            const sum = v1 + v2;
            if (sum === target){
                console.log("result indexes are: (" + i + "; " + j + ")");
                console.log("values are: (" + v1 + "; " + v2 + ")");
                return;
            }
        }
    }
}

findIndexes();


