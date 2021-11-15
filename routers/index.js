const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res)=>{
    res.send(`this project is running on http://localhost:${port}/`)
})


