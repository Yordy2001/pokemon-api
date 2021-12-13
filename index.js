const express = require('express')
const port = 5000
const bodyParser = require('body-parser')
const cookieParse =require('cookie-parser')
const cookieSession = require('./cookie')
const app = express()

// ROUTERS
const router = require('./routers/index')

// App. Middleware
app.set('trust proxy', 1)
app.use(bodyParser.urlencoded({
    extended:false
}))
// app.use(bodyParser.json())
app.use(cookieParse())
app.use(cookieSession)

// app.use(function (req, res, next) {
//     req.session.isNew = false
//     next()
// })
// const isAuth = (req, res, next) => {
//     if(!req.session.isNew){
//         next()
//     }
//     res.redirect('/login')
// }

// Routers
app.get('/', (req, res)=>{
    console.log(req.session)
    var responseText = "Welcome to Pokemon-api! <br>"
    res.send(responseText)
})

app.use(router)


// Error handler
app.use((err, req, res, next) => res.status(400).send(err.menssage))

app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})
