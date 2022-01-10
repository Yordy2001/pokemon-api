const path = require('path')
const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    data = []
    let user = req.session.user
    try {
        const pokemons = await Pokemon.findAll();
        pokemons.forEach(element => {
            const {name, pokemon_ability, pokemon_type} = element
            data = [...data, {name, pokemon_ability, pokemon_type}]
        });
        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), {data, user})
    } catch (error) {
        console.log(error)
    }
}
