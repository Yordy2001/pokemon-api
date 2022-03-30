const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{

    const { id } = req.params
    try {
        await Pokemon.destroy({
            where:{
                id
            }
        })
    res.send("Se hizo el delete")
    } catch (error) {
        console.log(error)
    }
}
