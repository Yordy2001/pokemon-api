const express = require('express')
const router = express.Router()

const login = require('./headers/login')
const register = require('./headers/register')


router.post('/login', login) 
router.post('/register', register) 

module.exports = router
