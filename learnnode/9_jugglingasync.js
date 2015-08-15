var bl = require('bl');
var http = require('http');

var urls = process.argv.slice(2)
var res = ['','','']
var completed = 0
urls.forEach(function (url, index, arr) {
  //console.log('index :' + index)
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) { return console.log("Error:" + err)}
      res[index] = data.toString()
      ++completed
      if(completed == 3)
      {
        res.forEach(function (res) {
          console.log(res)
        })
      }
    }))
  })
})
