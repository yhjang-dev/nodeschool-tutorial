var fs = require('fs')

var filename = process.argv[2]
var buffer = fs.readFileSync(filename)
var contents = buffer.toString()

var lines = contents.split('\n')
console.log(Number(lines.length) - 1)
