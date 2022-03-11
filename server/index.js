const express = require('express')
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParse =require('cookie-parser')
const cookieSession = require('./cookie')
const app = express()

// ROUTERS
const router = require('./routers/index')

// App. Middleware
app.set('trust proxy', 1) //cookie config
app.use(bodyParser.urlencoded({extended:false}))
app.use('/static', express.static('./static'))
app.use('/images', express.static('./images'))
app.set('templates', './static/templates') //templates config
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParse())
app.use(cookieSession)
app.use(cors())


// Routers
app.get('/', (req, res)=>{

    var responseText = "Welcome to Pokemon-api! <br>"
    res.send(responseText)
})

app.use(router)


// Error handler
app.use((err, req, res, next) => res.status(400).send(err.menssage))

app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})
