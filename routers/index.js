const express = require('express')
const router = express.Router()

const getAll = require('./Pokemons/index')
const auth  = require('./auth/index')
const login = require('./login')
const register = require('./register')

router.get('/login', login)
router.get('/register', register)
router.use('/pokemon', getAll) 
router.use('/auth', auth)

module.exports = router
