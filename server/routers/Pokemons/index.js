const express = require('express')
const multer  = require('multer')


const autenticate = require('../../middleware/authenticate')
const upload = multer({ dest: 'images/' })

const getAll = require('./controllers/getAll')
const getByName = require('./controllers/getByName')
const getById = require('./controllers/getById')
const getAbilities = require('./controllers/getPokeAbility')
const getType = require('./controllers/getPokeType')

const addPokemon = require('./controllers/addPokemon')
const deletePokemon = require('./controllers/deletePokemon')
const updatePokemon = require('./controllers/updatePokemon')

const  router  = express.Router()

router.get('/', autenticate, getAll)
router.get('/:id', autenticate, getById)
router.get('/:name', autenticate, getByName)
router.get('/poke-ability', getAbilities)
router.get('/poke-type',  getType)


router.post('/', autenticate, upload.single('avatar'), addPokemon)
router.delete('/:id', autenticate, deletePokemon)
router.put('/:id', autenticate, upload.single('avatar'), updatePokemon)

module.exports = router
