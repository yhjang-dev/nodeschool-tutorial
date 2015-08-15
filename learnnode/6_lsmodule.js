var fs = require('fs');
var path = require('path');

function listFiles(pathname, extname, callback)
{
  var lists = []
  fs.readdir(pathname, function (err, list) {
    if (err)
    {
      return callback(err)
    }
    list.forEach(function (item) {
      if (path.extname(item).slice(1) == extname) {
        lists.push(item)
      }
    })
    callback(null, lists)
  })
}

module.exports = listFiles
