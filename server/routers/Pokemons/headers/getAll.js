const path = require('path')
const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db');

module.exports = async (req, res) => {
    console.log("entro")
    // const UserId = req.session.user.id
    try {
        const pokemons = await Pokemon.findAll();

        // get pokemon ability
        const pokemonAbility = await pokemon_ability.findAll()

        const pokemonType = await pokemon_type.findAll()

        res.send(pokemons)
    } catch (error) {
        console.log(error)
    }
}
