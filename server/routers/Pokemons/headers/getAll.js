const path = require('path')
const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db');

module.exports = async (req, res) => {
    const UserId = req.session.user.id
    try {
        const pokemons = await Pokemon.findAll({
            where:{ UserId }
        });

        // get pokemon ability
        const pokemonAbility = await pokemon_ability.findAll()

        const pokemonType = await pokemon_type.findAll()

        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), { pokemons, pokemonAbility, pokemonType })
    } catch (error) {
        console.log(error)
    }
}
