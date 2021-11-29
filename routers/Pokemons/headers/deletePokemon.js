const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el delete")
    const { name } = req.body
    try {
        await Pokemon.destroy({
            where:{
                name
            }
        })
    } catch (error) {
        console.log(error)
    }
}
