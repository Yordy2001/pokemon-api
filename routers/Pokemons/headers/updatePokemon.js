const { Pokemon } = require('../../../db')

module.exports = (req, res) =>{
    res.send("Se hizo el post")
    const {id} = req.body
    try {
        const pokemon = Pokemon.update({id}, {
            where: {
                id
            }   
        })
        res.send(`pokemon ${pokemon.name} was updated`)
    } catch (error) {
        console.log(error)
    }
}
