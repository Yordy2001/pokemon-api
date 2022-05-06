const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    const { id } = req.params
    const img = req.file.filename
    const { name, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    try {
        await Pokemon.update({ name, img, description, owner, pokemonAbilityId, pokemonTypeId }, {
            where: {
                id
            }   
        })
    
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
