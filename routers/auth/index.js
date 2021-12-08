const express = require('express')
const router = express.Router()

const login = require('./headers/login')
const register = require('./headers/register')
const autenticate = require('../../middleware/authenticate')

router.post('/login', autenticate, login) 
router.post('/register', register) 

module.exports = router
