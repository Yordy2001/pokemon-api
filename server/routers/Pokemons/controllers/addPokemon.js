const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) =>{
    
    const { name, description, owner, pokeAbilityName, pokeTypeName } = req.body
    const img = req.file.filename

    // const UserId =  req.session.user.id
    try {
        const pokemonTypeId = await pokemon_type.findOne({attributes: ['id'],
            where: { type: JSON.parse(pokeTypeName) },
        })

        // get pokemon ability
        const pokemonAbilityId = await pokemon_ability.findAll({attributes: ['id'],
            where: { ability: JSON.parse(pokeAbilityName) }
        })

        // Get userId
        await Pokemon.create({
            name: JSON.parse(name),
            img,
            description: JSON.parse(description),
            owner: JSON.parse(owner),
            pokemonAbilityId:  JSON.stringify(pokemonAbilityId.id),
            pokemonTypeId: JSON.stringify(pokemonTypeId.id) ,
            // UserId,
        })
        res.send(pokemonTypeId)
    } catch (error) {
        console.log(error)
    }
}
