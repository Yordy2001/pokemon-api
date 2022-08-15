const { Pokemon } = require('../../../db')

module.exports = async (req, res) => {
    const {ordering, id} = req.query
    try {
        const pokemon = await Pokemon.findAll({
            where: {id: id},
            order :[ ordering ],
            limit : 4
        });

        if (pokemon) {
            res.status(200).json(pokemon)
        }
        res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }
}
