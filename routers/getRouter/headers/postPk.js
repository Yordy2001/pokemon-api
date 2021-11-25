const pokemons = require('../../../db/models')

module.exports = (req, res) =>{
    res.send("Se hizo el post")
    try {
        pokemons.create({})
    } catch (error) {
        
    }
}



// const data = req.body
// pokemons = [...pokemons, pk2]
