const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el delete")
    const { id } = req.body
    try {
        await Pokemon.destroy({
            where:{
                id
            }
        })
    } catch (error) {
        console.log(error)
    }
}
