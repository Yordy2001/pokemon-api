const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    const { id } = req.params

    try {
        await Pokemon.destroy({
            where:{
                id
            }
        })
    res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
