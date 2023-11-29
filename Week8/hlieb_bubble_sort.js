function BubbleSort(arr) {
 
    for (var i = 0; i < arr.length; i++) {
 
        // i already used
        for (var j = 0; j < (arr.length - i - 1); j++) {
 
            // Checking if the item at present iteration is greater 
            if (arr[j] > arr[j + 1]) {
 
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    //console.log(arr);
}
 
//var arr = [5, 4, 6, 10, 1];

//BubbleSort(arr);

 