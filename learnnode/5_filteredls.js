var fs = require('fs');
var path = require('path');

var pathname = process.argv[2]
var extname = process.argv[3]

fs.readdir(pathname, function (err, list) {
  list.forEach(function (item) {
    if (path.extname(item).slice(1) == extname) {
      console.log(item)
    }
  })
})
