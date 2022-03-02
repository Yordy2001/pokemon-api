const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    console.log("se agrego")
    const { name, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    const img = req.file.filename
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
    res.redirect('/pokemon')
}
