const { Pokemon } = require('../../../db')

module.exports = (req, res) =>{
    res.send("Se hizo el post")
    const {name} = req.body
    try {
        const pokemon = Pokemon.update({name}, {
            where: {
                name
            }   
        })
    } catch (error) {
        console.log(error)
    }
}
