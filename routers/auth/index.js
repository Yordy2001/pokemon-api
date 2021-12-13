const express = require('express')
const router = express.Router()

// const getRegister = require('./register')
// const getLoging = require('./register')
const login = require('./headers/login')
const register = require('./headers/register')

// router.get('/login', getLoging)
// router.get('/register', getRegister)

router.post('/login', login) 
router.post('/register', register) 

module.exports = router
