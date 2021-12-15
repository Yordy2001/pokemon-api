const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['name', 'ability', 'type']
        });
        res.send( {data: pokemons} )
    } catch (error) {
        console.log(error)
    }
    
}
