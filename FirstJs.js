var http = require('http')
var fs = require('fs')

var ourmodule = require ('./ourmodule.js')

var server =http.createServer((req,res) => {
 res.end('Welome!')
})
server.listen(3000)
console.log(ourmodule.ourFunction())
fs.readFile('dummy.txt',function(err,data) => {
console.log(data)
});
