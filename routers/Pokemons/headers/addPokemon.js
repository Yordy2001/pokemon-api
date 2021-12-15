const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
    res.send("Se hizo el post")
    const {name, ability, type} = req.body
    try {
        await Pokemon.create({
            name,
            ability,
            type
        })
    } catch (error) {
        console.log(error)
    }
}
