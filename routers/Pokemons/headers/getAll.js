const path = require('path')
const pug = require('pug')
const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['name', 'ability', 'type']
        });
        // const file = pug.renderFile((path.resolve(__dirname, '../../../static/templates/pokemon.pug')))
        // res.sendFile((path.resolve(__dirname, '../../../static/templates/pokemon.pug')))
        // res.send(file)
        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), {pokemons : pokemons})
    //    res.send(pokemons)
    } catch (error) {
        console.log(error)
    }
    
}
