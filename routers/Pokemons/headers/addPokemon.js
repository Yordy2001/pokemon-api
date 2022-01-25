const { Pokemon, User } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el post")
    const {name, img, description, owner, pokemonAbilityId, pokemonTypeId} = req.body
    const UserId =  req.session.user.id
    try {
        // Get userId
        await Pokemon.create({
            name,
            img,
            description,
            owner,
            pokemonAbilityId,
            pokemonTypeId,
            UserId,
        })
    } catch (error) {
        console.log(error)
    }
}
