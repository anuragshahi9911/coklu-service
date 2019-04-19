var express = require('express')
var router = express.Router()

router.get('/', function (request, response) {
  response.send('hi from service')
})
module.exports = router
