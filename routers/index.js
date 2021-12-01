const express = require('express')
const router = express.Router()

const getAll = require('./Pokemons/index')
const auth  = require('./auth/index')

router.use('/pokemon', getAll) 
router.use('/auth', auth)

module.exports = router
