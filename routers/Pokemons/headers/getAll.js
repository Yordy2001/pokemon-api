const path = require('path')
const {Pokemon, User} = require('../../../db');

module.exports = async (req, res) => {
    data = []
    let user = req.session.user
    try {
        let {id} = await User.findOne({attributes:['id'], where:{firstName: req.session.user} })
        const pokemons = await Pokemon.findAll({
            where:{ UserId:id }
        });
        pokemons.forEach(element => {
            const {name, owner, img, pokemonAbilityId, pokemonTypeId} = element
            data = [...data, {name, owner, img, pokemonAbilityId, pokemonTypeId}]
        });
        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), {data, user})
    } catch (error) {
        console.log(error)
    }
}
