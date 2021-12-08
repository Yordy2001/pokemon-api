const express = require('express')
const port = 5000
const bodyParser = require('body-parser')
var cookieParse =require('cookie-parser')
const cookie = require('./cookie')
const app = express()

// ROUTERS
const router = require('./routers/index')

// App. Middleware
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(cookieParse())
app.use(cookie)


// Routers
app.get('/', (req, res)=>{
    req.session.isAuth = true
    // console.log(req.session)
    // console.log(req.session.id)
    var responseText = "Welcome to Pokemon-api! <br>"
    res.send(responseText)
})

app.use(router)


// Error handler
app.use((err, req, res, next) => res.status(400).send(err.menssage))

app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})
