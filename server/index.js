const express = require('express')
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParse = require('cookie-parser')
const cookieSession = require('./utils/cookie')
const app = express()

// ROUTERS
const router = require('./routers/index')

// App. Middleware
app.set('trust proxy', 1) //cookie config
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('./static'))
app.use('/images', express.static('./images'))
app.set('templates', './static/templates') //templates config
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParse())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(cookieSession)


// Routers
app.get('/', (req, res) => {

    var responseText = "Welcome to Pokemon-api v2! <br>"
    res.send(responseText)
})

app.use(router)

// Error handler
app.use((err, req, res, next) => res.status(400).send(err.menssage))

const server = app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})

module.exports = { app, server };
