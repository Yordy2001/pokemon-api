const { pokemon_ability } = require('../../../db')

module.exports = async ( req, res ) =>{

    try {
        const pokemonsAbility = await pokemon_ability.findAll();
        res.status(200).send(pokemonsAbility)
    } catch (err) {
        console.log(err)
    }
}
