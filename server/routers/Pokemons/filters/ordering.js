const { Pokemon } = require('../../../db')

module.exports = async (req, res) => {
    const {ordering} = req.query
    try {
        const pokemon = await Pokemon.findAll({
            order :[ ordering ]
        });

        if (pokemon) {
            res.status(200).json(pokemon)
        }
        res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }
}
