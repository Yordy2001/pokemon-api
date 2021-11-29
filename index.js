const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
var cookieParse =require('cookie-parser')


// ROUTERS
const router = require('./routers/index')


// App. Middleware
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(cookieParse())


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
