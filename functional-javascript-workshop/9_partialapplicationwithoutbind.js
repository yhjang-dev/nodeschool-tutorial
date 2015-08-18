var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var arg = [namespace].concat(Array.prototype.slice.call(arguments));
    console.log.apply(console, arg)
  }
}

module.exports = logger
