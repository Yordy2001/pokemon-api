const { JSON } = require('sequelize/dist')
const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{

    

    // // console.log(req.file)
    // const { name, description, owner, pokemonAbilityId, pokemonTypeId } = req.body
    // console.log(name, description, owner, pokemonAbilityId, pokemonTypeId)
    console.log(req.body.data)
    // const img = req.file.filename
    // const UserId =  req.session.user.id
    // try {
    //     // Get userId
    //     await Pokemon.create({
    //         name,
    //         // img,
    //         description,
    //         owner,
    //         pokemonAbilityId,
    //         pokemonTypeId,
    //         UserId,
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    res.sendStatus(200)
}
