const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    const {id} = req.params
    const { name, img, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    try {
        await Pokemon.update({id, name, img, description, owner, pokemonAbilityId, pokemonTypeId }, {
            where: {
                id
            }   
        })
    } catch (error) {
        console.log(error)
    }
    res.send("Se hizo el update")
}
