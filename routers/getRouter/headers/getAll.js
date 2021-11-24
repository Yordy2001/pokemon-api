const pokemon = require('../../utils/getPokemons')

module.exports = (req, res)=> {
    res.send(pokemon)
}
