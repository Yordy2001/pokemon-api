const express = require('express')

const getAll = require('./headers/getAll')
const getByName = require('./headers/getByName')
const getById = require('./headers/getById')
const postRouter = require('./headers/postPk')

const  router  = express.Router()

router.get('/id/:id', getById)
router.use('/name/:name', getByName)
router.get('/', getAll)

router.post('/', postRouter)

module.exports = router
