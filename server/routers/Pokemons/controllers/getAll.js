const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db');

module.exports = async (req, res) => {
    // const UserId = req.session.user.id
    try {
        const pokemons = await Pokemon.findAll({
            // where: { UserId },
            include: [pokemon_ability, pokemon_type],
            // include: pokemon_type
        });
        res.status(200).send(pokemons)
    } catch (error) {
        console.log(error)
    }
}
