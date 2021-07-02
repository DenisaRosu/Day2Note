var http = require('http')
var fs = require('fs')

var ourmodule = require ('./ourmodule.js')

var server =http.createServer((req,res) => {
 res.end('Welome!')
})
server.listen(3000)
console.log(ourmodule.PlusFunction('aa','bb'))
fs.readFile('dummy.txt', 'utf-8',(err,data) => {
console.log(data)
})
