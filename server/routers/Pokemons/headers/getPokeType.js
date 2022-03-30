const { pokemon_type } = require('../../../db')

module.exports = async ( req, res ) =>{

    try {
        const pokemonsType= await pokemon_type.findAll();
        res.status(200).send(pokemonsType)
    } catch (err) {
        console.log(err)
    }
}
