const express = require('express')
const router = express.Router()

const login = require('./headers/login')
const autenticate = require('../../middleware/authenticate')

router.post('/login', autenticate, login) 

module.exports = router
