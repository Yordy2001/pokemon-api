const express = require('express')
const app = express()
const port = 5000

const pokemon = require('./utils/pokemons-json')


app.get('/', (req, res)=>{
    res.send('this project is running on')
})

app.get('/pokemon', (req, res) =>{
    res.send(pokemon)
})


app.listen(port, ()=>{
    console.log(`this project is running on http://localhost:${port}/`)
})
