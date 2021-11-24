const express = require('express')
const app = express()

const getAll = require('./getRouter/index')

const router = express.Router()



router.use('/pokemon', getAll) 


module.exports = router