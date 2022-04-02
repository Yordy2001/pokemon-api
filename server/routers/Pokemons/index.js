const express = require('express')
const multer  = require('multer')


const autenticate = require('../../middleware/authenticate')
const upload = multer({ dest: 'images/' })

const getAll = require('./controller/getAll')
const getByName = require('./controller/getByName')
const getById = require('./controller/getById')
const getAbilities = require('./controller/getPokeAbility')
const getType = require('./controller/getPokeType')

const addPokemon = require('./controller/addPokemon')
const deletePokemon = require('./controller/deletePokemon')
const updatePokemon = require('./controller/updatePokemon')

const  router  = express.Router()

router.get('/', autenticate, getAll)
router.get('/id/:id', autenticate, getById)
router.get('/name/:name', autenticate, getByName)
router.get('/poke-ability', getAbilities)
router.get('/poke-type',  getType)


router.post('/', autenticate, upload.single('avatar'), addPokemon)
router.delete('/id/:id', autenticate, deletePokemon)
router.put('/id/:id', autenticate, upload.single('avatar'), updatePokemon)

module.exports = router
