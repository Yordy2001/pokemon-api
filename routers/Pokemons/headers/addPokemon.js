const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{

    const { name, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    const img = req.file.path
    const UserId =  req.session.user.id

    try {
        // Get userId
        await Pokemon.create({
            name,
            img,
            description,
            owner,
            pokemonAbilityId :1,
            pokemonTypeId: 3,
            UserId,
        })
    } catch (error) {
        console.log(error)
    }
    res.redirect('/pokemon')
}
