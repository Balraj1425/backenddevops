const express  = require('express')
const routes = express.Router()
const userfunctions = require('../controllers/users')


routes.get('/view', userfunctions.listDataCtrl )
routes.post('/addData', userfunctions.addDataCtrl )

module.exports = routes
