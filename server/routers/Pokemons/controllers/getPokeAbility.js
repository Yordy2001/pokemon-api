const { pokemon_ability } = require('../../../db')

module.exports = async ( req, res ) =>{

    try {
        const pokemonsAbility = await pokemon_ability.findAll();

        if(pokemonsAbility){
            return res.status(200).send(pokemonsAbility)
        }
        res.sendStatus(404)
    } catch (err) {
        console.log(err)
    }
}
