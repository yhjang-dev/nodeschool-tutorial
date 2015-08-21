function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return 0
  operation()
  return function () {
    repeat(operation, --num)
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  var result = fn.apply(fn)
  while (result && typeof v === "function") {
    result = result()
  }
  return result
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function () {
    return repeat(operation, num)
  })
}
