const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
var cookieParse =require('cookie-parser')


// ROUTERS
const router = require('./routers/index')

// MIDDLEWARE
// const loger = require('./middleware/logger')
let requestTime = require('./middleware/requestime')
// let validateCookies = require('./middleware/cookieValidator')
let pokemons = require('./utils/pokemons-json')

// App. Middleware
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(cookieParse())

// Dev. Middleware
// app.use(validateCookies)
app.use(requestTime)
// app.use(loger)


// Routers
app.get('/', (req, res)=>{
    var responseText = "Welcome to Pokemon-api! <br>"
    responseText += `<small>Requested at: ${req.requestTime} </small>`
    res.send(responseText)
})

app.use(router)

app.delete('/pokemon/:id', (req, res) =>{
    res.send("call delete")
    const responseId = req.params.id
    pokemons.splice(responseId, 1)
    pokemon = (responseId)=>{
        pokemons.map((element, index) => {
            console.log(element, index)
        });
    }
    pokemon()
})


// Error handler
app.use((err, req, res, next) => res.status(400).send(err.menssage))

app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})

