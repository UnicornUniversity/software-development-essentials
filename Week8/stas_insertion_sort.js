var input_array = [
  8, 7, 6, 5, 4, 3   
];

function insertion_sort(arr) {
  for (var ptr = 0; ptr < arr.length-1 ; ptr++) {
    // bubble moment
    const ptr_val = arr[ptr];
    const ptr_next_val = arr[ptr+1];

    if (ptr_next_val < ptr_val) {
      // we swop, cause [..., x, y,...] where y < x
      arr[ptr+1] = ptr_val;
      arr[ptr] = ptr_next_val;
    }

    // now we backtrack lol
    for (var bptr = ptr; bptr != 0; bptr--) {
      const curr_val = arr[bptr];
      const prev_val = arr[bptr-1];

      if (curr_val < prev_val) {
        // we SWOP again
        arr[bptr] = prev_val;
        arr[bptr-1] = curr_val;
      }
    }
  }


  return arr;
}

//console.log(selection_sort(input_array));
//console.log(input_array);


