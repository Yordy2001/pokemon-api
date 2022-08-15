const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) => {
    let {name, id} = req.query
    try {
        // Serch Pokemon By Name
            const pokemon = await Pokemon.findOne({
                include: [pokemon_ability, pokemon_type],
                where: (name ? {name:name} : {id:id})
    
            });
            if (pokemon) {
                return res.status(200).json(pokemon)
            }
    
            return res.sendStatus(404)
    
    } catch (error) {
        console.log(error)
    }
}
