var net = require('net');

var port = process.argv[2]

function padding(number) {
  return (number < 10)? '0'+number : number
}

function getTime() {
  var now = new Date()
  var year = String(now.getFullYear())
  var month = padding(now.getMonth() + 1)
  var day = padding(now.getDate())
  var h = padding(now.getHours())
  var m = padding(now.getMinutes())

  return year+'-'+month+'-'+day+' '+h+':'+m
}
var server = net.createServer(function (socket) {
  socket.end(getTime()+'\n')
})
server.listen(Number(port))
