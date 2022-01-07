const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el post")
    const {name, img, description, pokemonAbilityId, pokemonTypeId} = req.body
    try {
        await Pokemon.create({
            name,
            img,
            description,
            pokemonAbilityId,
            pokemonTypeId,
        })
    } catch (error) {
        console.log(error)
    }
}
