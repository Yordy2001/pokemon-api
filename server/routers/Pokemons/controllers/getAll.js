const { Pokemon } = require('../../../db');

module.exports = async (req, res) => {
    console.log('enviado')
    // const UserId = req.session.user.id
    try {
        const pokemons = await Pokemon.findAll();
        res.status(200).send(pokemons)
    } catch (error) {
        console.log(error)
    }
}