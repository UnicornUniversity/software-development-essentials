function findIndexesMaps(input, target){
    const cache = {};

    for(let i=0; i < input.length; i++){
        const val = input[i];
        const diff = target - val;
        if (cache[diff] != undefined){
            console.log("result indexes are: (" + i + "; " + cache[diff] + ")");
            console.log("values are: (" + diff + "; " + val + ")");
            break;
        }else{
            cache[val] = i;
        }        
    }   
}
