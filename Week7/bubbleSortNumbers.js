const nums = [6, 1, 30, 27, 5]

function sort(nums){
    for(let outer = 0; outer < nums.length; outer++){
        for(let i = outer + 1; i < nums.length; i++){
            if (nums[i] < nums[outer]){
                const v = nums[i];
                nums[i] = nums[outer];
                nums[outer] = v;
            }
            console.log(nums);
        }
    }   
}

function sort2(nums){
    let flipped = false;
    do{
        flipped = false;
        for(let i = 0; i < nums.length - 1; i++){
            if (nums[i] > nums[i + 1]){
                const v = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = v;
                flipped = true;
            }
            console.log(nums);
        }
    }while(flipped);
}

//sort(nums);
sort2(nums);