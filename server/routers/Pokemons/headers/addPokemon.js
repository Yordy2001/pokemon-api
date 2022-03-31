const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) =>{
    
    const { name, description, owner, pokeAbilityName, pokeTypeName } = req.body
    const img = req.file.filename

    // const UserId =  req.session.user.id

    try {
        const pokemonTypeId = await pokemon_type.findAll(
            {attributes: ['id']},
            { where: { type: pokeTypeName },
        })

        // get pokemon ability
        const pokemonAbilityId = await pokemon_ability.findAll(
            {attributes: ['id']},
            { where: { ability: pokeAbilityName }
        })
        // Get userId
        await Pokemon.create({
            name,
            img,
            description,
            owner,
            pokemonAbilityId:  JSON.stringify(pokemonAbilityId[0].id),
            pokemonTypeId: JSON.stringify(pokemonTypeId[0].id) ,
            // UserId,
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
