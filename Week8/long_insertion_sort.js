var arr = [7, 14, 51, 24, 5, 71, 0, 1, 4, 2, 6, 8];

function insertionSort(arr) {
  const n = arr.length; // length of arr
  let index, newValue; // declare current index, value of element in that index

  //start from 1 because element in position 0 isnt required to insert
  for (let i = 1; i < n; i++) {
    index = i; // init value current index
    newValue = arr[i]; //init value

    //loop from current index to 0 or to find the index need to insert
    while (index > 0 && arr[index - 1] > newValue) {
      arr[index] = arr[index - 1];
      index--;
    }
    //init new value to
    arr[index] = newValue;
  }
}

//insertionSort(arr);
//console.log(arr);
