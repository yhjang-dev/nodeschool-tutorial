var lsmodule  = require('./6_lsmodule');

function printList(err, list) {
  if (err) {
    return console.error('Error:', err)
  }
  list.forEach(function (item) {
    console.log(item)
  })
}

var pathname = process.argv[2]
var extname = process.argv[3]

lsmodule(pathname, extname, printList)
