const path = require('path')
const { Pokemon } = require('../../../db');

module.exports = async (req, res) => {
    const UserId = req.session.user.id
    try {
        const pokemons = await Pokemon.findAll({
            where:{ UserId }
        });
        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), { pokemons })
    } catch (error) {
        console.log(error)
    }
}
