var express = require('express')
var router = express.Router()
var dashboardRouter = require('./dashboard-route')
router.use('/', dashboardRouter)
module.exports = router
