const express = require('express')
const app = express()

// set post
const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

console.log(express.static(__dirname))


app.listen(port, function() {
  console.log('app running')
})
