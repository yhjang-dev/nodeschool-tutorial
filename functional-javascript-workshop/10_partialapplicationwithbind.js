module.exports = function(namespace) {
  var log = console.log.bind(console, namespace);
  return log
}
