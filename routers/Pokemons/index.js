const express = require('express')

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const addPokemon = require('./headers/addPokemon')
const deletePokemon = require('./headers/deletePokemon')

const  router  = express.Router()

router.get('/id/:id', getById)
router.use('/name/:name', getByName)
router.get('/', getAll)

router.post('/', addPokemon)
router.delete('/', deletePokemon)

module.exports = router
