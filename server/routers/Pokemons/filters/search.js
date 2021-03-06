const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) => {
    let name = req.params.name
    
    try {
        const pokemon = await Pokemon.findOne({
            include: [pokemon_ability, pokemon_type],
            where: {name}

        });
        if (pokemon) {
            return res.status(200).json(pokemon)
        }

        return res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }
}
