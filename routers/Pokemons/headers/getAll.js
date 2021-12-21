const cookieSession = require('cookie-session');
const path = require('path')
const pug = require('pug');
const { JSON } = require('sequelize/dist');
const { QueryTypes } = require('sequelize')
const {Pokemon, sequelize} = require('../../../db');

module.exports = async (req, res) => {
    data = []
    try {
        const pokemons = await Pokemon.findAll();
        pokemons.forEach(element => {
            const {name, ability, type} = element
            data = [...data, {name, ability, type}]
        });

        res.render(path.resolve(__dirname, '../../../static/templates/pokemon.pug'), data)

    } catch (error) {
        console.log(error)
    }
    
}
