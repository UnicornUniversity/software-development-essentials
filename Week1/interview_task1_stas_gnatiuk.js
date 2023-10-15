function find_indicies(source, target) {
  var cache = {};
  for (var i = 0; i < source.length; i++) {
    if (source[i] > target) {
      continue;
    } 
    let diff = target - source[i];
    if (cache[diff] != undefined) {
      return [cache[diff], i];
    } else {
      cache[source[i]] = i;
    }
  }
}
console.log(find_indicies([1, 2, 3, 4, 5, 6], 11))
