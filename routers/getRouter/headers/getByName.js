const pokemons = require('../../../routers/utils/getPokemons')

module.exports = ( req, res ) =>{

    pokemonName = pokemons.map(data =>{
        return(data.name)
    })
    res.send(pokemonName)
    // console.log(req.params.name)
}
