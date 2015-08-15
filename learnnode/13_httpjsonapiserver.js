var http = require('http');
var url = require('url')
var port = Number(process.argv[2])

var server = http.createServer(function (request, response) {
  if (request.method != 'GET') {
    return response.end('Only accept GET.')
  }
  var req = url.parse(request.url, true)
  if (req['pathname'] == '/api/parsetime') {
    var isoTime = req.query['iso']
    var d = new Date(isoTime)
    var result = {}
    result["hour"] = d.getHours()
    result["minute"] = d.getMinutes()
    result["second"] = d.getSeconds()
    return response.end(JSON.stringify(result))

  } else if (req['pathname'] == '/api/unixtime') {
    var isoTime = req.query['iso']
    var d = new Date(isoTime)
    var result = {'unixtime': d.getTime()}
    return response.end(JSON.stringify(result))
  } else {
    return response.end('Wrong API.')
  }

})

server.listen(port)
