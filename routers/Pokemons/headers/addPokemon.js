const { Pokemon, User } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el post")
    const {name, img, description, owner, pokemonAbilityId, pokemonTypeId} = req.body

    try {
        // Get userId
        let userId = await User.findOne({attributes:['id'], where:{firstName: req.session.user} })
        await Pokemon.create({
            name,
            img,
            description,
            owner,
            pokemonAbilityId,
            pokemonTypeId,
            userId,
        })
    } catch (error) {
        console.log(error)
    }
}
