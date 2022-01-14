const express = require('express')
const router = express.Router()

const getAll = require('./routers/Pokemons/index')
const auth  = require('./routers/auth/index')
const login = require('./routers/login')
const admin = require('./routers/admin')
const register = require('./routers/register')
const authenticate = require('../middleware/authenticate')
router.get('/login', login)
router.get('/admin', authenticate, admin)
router.get('/register', register)
router.use('/pokemon', getAll) 
router.use('/auth', auth)

module.exports = router
