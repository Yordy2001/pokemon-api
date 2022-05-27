const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) =>{
    const { name, description, owner, pokeAbilityName, pokeTypeName } = req.body
    const img = req.file.filename

    const UserId =  req.session.user.id
    try {
        const pokemonTypeId = await pokemon_type.findOne({
            where: { type: pokeTypeName },
        })

        // get pokemon ability
        const pokemonAbilityId = await pokemon_ability.findOne(
            {where: { ability: pokeAbilityName }}
        )

        // Get userId
        await Pokemon.create({
            name,
            img,
            description,
            owner,
            ability:  pokemonAbilityId,
            pokemonType: pokemonTypeId,
            UserId,
        }),{
            include: Pokemon.pokemon_ability,
        }
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}
