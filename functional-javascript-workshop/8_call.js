function duckCount() {
  var hasQuack = function (obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }

  return Array.prototype.reduce.call(arguments, function (pre, value, index, arr) {
    return pre + (hasQuack(value)? 1 : 0 )
  }, 0)
}

module.exports = duckCount
