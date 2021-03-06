const express = require('express')
const multer  = require('multer')


const autenticate = require('../../middleware/authenticate')
const upload = multer({ dest: 'images/' })

const getAll = require('./controllers/getAll')
const getByName = require('./filters/search')
const getById = require('./controllers/getById')
const getAbilities = require('./controllers/getPokeAbility')
const getType = require('./controllers/getPokeType')
const ordering = require('./filters/ordering')

const addPokemon = require('./controllers/addPokemon')
const deletePokemon = require('./controllers/deletePokemon')
const updatePokemon = require('./controllers/updatePokemon')

const  router  = express.Router()

router.get('/poke-ability', getAbilities)
router.get('/poke-type',  getType)
router.get('/filter', ordering )
router.get('/:id(\d+)', getById)
router.get('/:name', getByName)
router.get('/', getAll)

router.post('/', autenticate, upload.single('avatar'), addPokemon)
router.delete('/:id', autenticate, deletePokemon)
router.put('/:id', autenticate, upload.single('avatar'), updatePokemon)

module.exports = router
