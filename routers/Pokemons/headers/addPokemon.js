const { Pokemon } = require('../../../db')

module.exports = async (req, res) =>{
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
