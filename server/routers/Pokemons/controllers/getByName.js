const {Pokemon} = require('../../../db')
const {Op} = require('sequelize')

module.exports = async (req, res)=> {
    try {
        const pokemon = await Pokemon.findAll({
            where: {
                name: {
                [Op.eq]: req.params.name
              }
            }
        });
        if(pokemon){
            return res.status(200).json({data: pokemon})
        }

        return res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }  
}
