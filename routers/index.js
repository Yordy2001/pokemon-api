const express = require('express')
const router = express.Router()

const getAll = require('./Pokemons/index')

router.use('/pokemon', getAll) 

module.exports = router
