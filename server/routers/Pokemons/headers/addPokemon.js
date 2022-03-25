const { Pokemon, pokemon_ability, pokemon_type } = require('../../../db')

module.exports = async (req, res) =>{
 
    const { name, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    const img = req.file.filename

    // const UserId =  req.session.user.id

    try {
        const pokeTypeId = await pokemon_type.findAll({attributes: ['id']},
            {where:{ type: pokemonTypeId }}
        );

        // get pokemon ability
        const pokeAbilityId = await pokemon_ability.findAll()
        console.log(pokeAbilityId)
        // Get userId
        // await Pokemon.create({
        //     name,
        //     img,
        //     description,
        //     owner,
        //     pokemonAbilityId,
        //     pokemonTypeId ,
        //     // UserId,
        // })
    } catch (error) {
        console.log(error)
    }
    res.sendStatus(200)
}
