const { Pokemon } = require('../../../db')

module.exports = async (req, res) => {
    try {
        const pokemon = await Pokemon.findAll({
            where: { id: req.params.id }
        });

        if (pokemon) {
            res.status(200).json(pokemon)
        }
        res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }
}
