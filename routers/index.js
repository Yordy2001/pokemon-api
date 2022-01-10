const express = require('express')
const router = express.Router()

const getAll = require('./Pokemons/index')
const auth  = require('./auth/index')
const login = require('./login')
const admin = require('./admin')
const register = require('./register')

router.get('/login', login)
router.get('/admin', admin)
router.get('/register', register)
router.use('/pokemon', getAll) 
router.use('/auth', auth)

module.exports = router
