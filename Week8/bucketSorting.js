function getMin(arr){
    let mv = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < mv){
            mv = arr[i];
        }
    }
    return mv;
}

function getMax(arr){
    let mv = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > mv){
            mv = arr[i];
        }
    }
    return mv;
}


function bucketSort(arr, num_buckets) {
    const buckets = []
    for(let i = 0; i < num_buckets; i++){
        buckets.push([])
    }
    const minVal = getMin(arr);
    const maxVal = getMax(arr);
    // place elements into buckets
    const bucketSize = Math.floor((maxVal - minVal) / num_buckets);    
    if (bucketSize < 1) {
        bucketSize = 1;
    }
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];
        const bucket_index = parseInt((elem - minVal) / bucketSize);
        if (bucket_index == num_buckets) {
            // put the max value in the last bucket
            buckets[num_buckets - 1].push(elem);
        } else {
            buckets[bucket_index].push(elem);
        }
    }
    
    const sortedArr = [];
    for(let i = 0; i < num_buckets; i++){
        const bucket = buckets[i];
        bucket.sort(function (x, y) {return x - y});
        for(let j = 0; j < bucket.length; j++){
            sortedArr.push(bucket[j]);
        }        
    }   
    
    return sortedArr;    
}

//const arr_to_sort = [22,50,32,28,41,12];
//console.log(bucketSort(arr_to_sort, 5));
