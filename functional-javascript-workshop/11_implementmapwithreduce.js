module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (list, value, index, arr) {
    list.push(fn(value))
    return list
  }, []);
}
