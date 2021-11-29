const express = require('express')
const app = express()

const getAll = require('./Pokemons/index')

const router = express.Router()



router.use('/pokemon', getAll) 


module.exports = router