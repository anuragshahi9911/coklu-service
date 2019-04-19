var express = require('express')
var cors = require('cors')
var appRouter = require('./routes/app-routes')
var app = express()
app.use(cors())
const port = 3000
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
app.use('/', appRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('server started...')
module.exports = app
