const path = require('path')
const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['name', 'ability', 'type']
        });
        res.sendFile((path.resolve(__dirname, '../../../static/templates/pokemon.htm')))
        // res.send( {data: pokemons} )
    } catch (error) {
        console.log(error)
    }
    
}
