const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) => {
    try {
        const pokemon = await Pokemon.findAll({
            include: [pokemon_ability, pokemon_type],
            limit : 4
        });

        if (pokemon) {
           return res.status(200).json(pokemon)
        }
        res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }
}
