const express = require('express')
const router = express.Router()

const login = require('./controllers/login')
const register = require('./controllers/register')
const logout = require('./controllers/logout')

router.get('/logout', logout)
router.post('/login', login) 
router.post('/register', register) 

module.exports = router
