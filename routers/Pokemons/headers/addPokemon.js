const { Pokemon } = require('../../../db')

module.exports = (req, res) =>{
    res.send("Se hizo el post")
    const {name, ability, type} = req.body
    try {
        const pokemon = Pokemon.create({
            name,
            ability,
            type
        })
    } catch (error) {
        console.log(error)
    }
}
