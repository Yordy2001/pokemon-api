const express = require('express')
const multer  = require('multer')


const autenticate = require('../../middleware/authenticate')
const upload = multer({ dest: 'images/' })

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const getAbilities = require('./headers/getPokeAbility')
const getType = require('./headers/getPokeType')

const addPokemon = require('./headers/addPokemon')
const deletePokemon = require('./headers/deletePokemon')
const updatePokemon = require('./headers/updatePokemon')

const  router  = express.Router()

router.get('/pokemon', autenticate, getAll)
router.get('/id/:id', autenticate, getById)
router.get('/name/:name', autenticate, getByName)
router.get('/poke-ability', getAbilities)
router.get('/poke-type',  getType)


router.post('/', autenticate, upload.single('avatar'), addPokemon)
router.delete('/id/:id', autenticate, deletePokemon)
router.put('/id/:id', autenticate, upload.single('avatar'), updatePokemon)

module.exports = router
