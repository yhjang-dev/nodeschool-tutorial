var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2])
var path = process.argv[3]

var server = http.createServer(function (request, response) {
  var contentStream = fs.createReadStream(path)
  contentStream.pipe(response)
})

server.listen(port)
