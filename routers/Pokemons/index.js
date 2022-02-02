const express = require('express')
const autenticate = require('../../middleware/authenticate')

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const addPokemon = require('./headers/addPokemon')
const deletePokemon = require('./headers/deletePokemon')
// const updatePokemon = require('./headers/updatePokemon')

const  router  = express.Router()

router.get('/id/:id', autenticate, getById)
router.use('/name/:name', autenticate, getByName)
router.get('/', autenticate, getAll)

router.post('/', autenticate,addPokemon)
router.delete('/', autenticate, deletePokemon)
// router.update('/', autenticate, updatePokemon)

module.exports = router
