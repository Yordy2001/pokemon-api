const express = require('express')
const autenticate = require('../../middleware/authenticate')

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const addPokemon = require('./headers/addPokemon')
const deletePokemon = require('./headers/deletePokemon')


const  router  = express.Router()

router.get('/id/:id', getById)
router.use('/name/:name', getByName)
router.get('/', getAll)

router.post('/', autenticate, addPokemon)
router.delete('/', autenticate, deletePokemon)

module.exports = router
