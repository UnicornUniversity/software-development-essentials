const agesOdd = [23, 56, 17, 30, 47, 67, 99]
const agesEven = [23, 56, 17, 30, 47, 78]

function isEven(arr){
    return arr.length % 2 === 0;
}

//console.log(isEven(agesOdd));
//console.log(isEven(agesEven));

function sort(nums){
    for(let outer = 0; outer < nums.length; outer++){
        for(let i = outer + 1; i < nums.length; i++){
            if (nums[i] < nums[outer]){
                const v = nums[i];
                nums[i] = nums[outer];
                nums[outer] = v;
            }            
        }
    }
    return nums;
}
const agesOddSorted = sort(agesOdd);
const agesEvenSorted = sort(agesEven);

console.log(agesOddSorted);
console.log(agesEvenSorted);

function getMean(arr){
    let result = -1;
    if (isEven(arr)){
        const index1 = arr.length / 2;
        const index2 = index1 - 1;       
        result = ~~((arr[index1] + arr[index2]) / 2);
    }else{
        const index = ~~(arr.length / 2);
        result = arr[index];
    }
    return result;
}

console.log("Mean for odd=" + getMean(agesOddSorted));
console.log("Mean for even=" + getMean(agesEvenSorted));


