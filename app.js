const express = require("express")
const bodyParser = require('body-parser')
const path = require("path")
const app = express()
const port = process.env.PORT || 4400

// use Parser Middleware
app.use(express.json())
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// use Logger middleware
app.use(function (req, res, next) {
  console.log('Request IP: ' + req.url)
  console.log('Request date: ' + new Date())
  return next()
})

app.get('/', async function (req, res, next) {
  return res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.post('/', urlencodedParser, async function (req, res, next) {
  const promise = await fetch('https://my.bible.com/users/fffelixfavour0/_cards.json?kind=bookmark&page=1')
  const data = await promise.json()
  console.log('DATA', data)
  return res.send(data)
})

// Listen to port
app.listen(port, function () {``
  console.log(`Server running at http://localhost:${port}`);
});