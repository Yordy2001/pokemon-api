const express = require('express')
const router = express.Router()

const getAll = require('./Pokemons/index')
const auth  = require('./auth/index')
const admin = require('./admin')
const register = require('./register')
const authenticate = require('../middleware/authenticate')

router.get('/admin', authenticate, admin)
router.get('/register', register)
router.use('/pokemon', getAll) 
router.use('/auth', auth)

module.exports = router
