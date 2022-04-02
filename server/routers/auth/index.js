const express = require('express')
const router = express.Router()

const login = require('./controller/login')
const register = require('./controller/register')
const logout = require('./controller/logout')

router.get('/logout', logout)
router.post('/login', login) 
router.post('/register', register) 

module.exports = router
