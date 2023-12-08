let numOfIterations = 0;
let cache = {};

function fibonacci(n){
    if (cache[n] !== undefined){
        return cache[n];
    }
    numOfIterations++;
    let value = 0;
    switch(n){
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            value = fibonacci(n - 1) + fibonacci(n - 2);
    }
    cache[n] = value;

    return value;
}

console.log(fibonacci(100));
console.log(numOfIterations);
//console.log(cache);