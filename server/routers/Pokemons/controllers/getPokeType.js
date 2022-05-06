const { pokemon_type } = require('../../../db')

module.exports = async ( req, res ) =>{

    try {
        const pokemonsType = await pokemon_type.findAll();
        
        if(pokemon_type){
            return res.status(200).json(pokemonsType)
        }

        res.sendStatus(404)
    } catch (err) {
        console.log(err)
    }
}
