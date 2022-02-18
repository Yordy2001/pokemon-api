const express = require('express')
const autenticate = require('../../middleware/authenticate')
const path = require('path')

const multer  = require('multer')
const storage = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        cb( null, 'static/images')
    },
    filename: (req, file, cb) =>{
        cb( null, Date.now() + path.extname(file.originalname))
    }
 })

const upload = multer( {storage: storage} )

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const addPokemon = require('./headers/addPokemon')
const deletePokemon = require('./headers/deletePokemon')
const updatePokemon = require('./headers/updatePokemon')

const  router  = express.Router()

router.get('/id/:id', autenticate, getById)
router.get('/name/:name', autenticate, getByName)
router.get('/', autenticate, getAll)

router.post('/', autenticate, upload.single('avatar'), addPokemon)
router.delete('/id/:id', autenticate, deletePokemon)
router.put('/id/:id', updatePokemon)

module.exports = router
