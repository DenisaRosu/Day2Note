var express = require('express')
var app = express()
//default endpoind s
app.get('/',(req,res) => {
  res.send('welocme')
})

app.get('stud',())

app.listen(3000,() => {
    console.log("Server is work")
})