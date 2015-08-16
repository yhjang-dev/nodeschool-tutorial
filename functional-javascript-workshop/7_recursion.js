function reduce(arr, fn, initial) {
  var r = function reduceNext(index, value) {
    if (index > arr.length - 1) return value;
    return reduceNext(index+1, fn(value, arr[index], index, arr))
  }
  return r(0, initial)
}

module.exports = reduce
