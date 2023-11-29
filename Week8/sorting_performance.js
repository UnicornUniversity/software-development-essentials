function calculatePerformance(arr, title){
    console.log("=== " + title + " ===");
    console.log("original array size =" + arr.length);
    //
    console.log("Bubble:");
    let start = performance.now();
    BubbleSort(arr);
    let timeTaken = performance.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");
    //
    console.log("Selection:");
    start = performance.now();
    selectionSort(arr);
    timeTaken = performance.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");
    //
    console.log("Insertion:");
    start = performance.now();
    insertion_sort(arr);
    timeTaken = performance.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");

    //
    console.log("Bucket:");
    start = performance.now();
    bucketSort(arr, 5);
    timeTaken = performance.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");

}

calculatePerformance(largeList, "RANDOM VECTOR (COMPARISON BASED)");
calculatePerformance(largeListAlmostSorted, "ALMOST SORTED VECTOR (COMPARISON BASED)");





