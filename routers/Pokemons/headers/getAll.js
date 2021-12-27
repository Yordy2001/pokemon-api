const path = require('path')
const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    data = []
    try {
        const pokemons = await Pokemon.findAll();
        pokemons.forEach(element => {
            const {name, ability, type} = element
            data = [...data, {name, ability, type}]
        });
        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), {data})
    } catch (error) {
        console.log(error)
    }
}
