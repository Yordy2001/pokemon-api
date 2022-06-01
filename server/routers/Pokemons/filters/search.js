const {Pokemon, pokemon_ability, pokemon_type} = require('../../../db')
const {Op} = require('sequelize')

module.exports = async (req, res)=> {
    try {
        const pokemon = await Pokemon.findOne({
            include: [pokemon_ability, pokemon_type],
            where: {
                name: {
                [Op.eq]: req.params.name
              }
            }
       
        });
        if(pokemon){
            return res.status(200).json(pokemon)
        }

        return res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }  
}
