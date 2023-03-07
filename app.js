const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 4400

// use Parser Middleware
app.use(express.json())

// use Logger middleware
app.use(function (req, res, next) {
  console.log('Request IP: ' + req.url)
  console.log('Request date: ' + new Date())
  return next()
})

app.get('/', async function (req, res, next) {
  return res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Listen to port
app.listen(port, function () {``
  console.log(`Server running at http://localhost:${port}`);
});