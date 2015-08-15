var fs = require('fs')

var filename = process.argv[2]
fs.readFile(filename, function (err, data) {

  var contents = data.toString()

  var lines = contents.split('\n')
  console.log(Number(lines.length) - 1)

})
