const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    console.log(req.file, req.body)
    // const {name, description, owner, pokemonAbilityId, pokemonTypeId} = req.body
    // const { avatar } = req.file
    // const UserId =  req.session.user.id
    // try {
    //     // Get userId
    //     await Pokemon.create({
    //         name,
    //         avatar,
    //         description,
    //         owner,
    //         pokemonAbilityId,
    //         pokemonTypeId,
    //         UserId,
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    // res.redirect('/pokemon')
}
