const path = require('path')
const pug = require('pug')
const {Pokemon} = require('../../../db');

module.exports = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({
            attributes: ['name', 'ability', 'type']
        });
        // const {Pokemon} =
        // for(i = 0; i <= pokemons.length; i++){
        //     console.log(pokemons)
        // }
        // res.send(pokemons)

        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), {pokemons:pokemons})
    //    res.render('pokemon.pug', {name:'charizar'})
    } catch (error) {
        console.log(error)
    }
    
}
