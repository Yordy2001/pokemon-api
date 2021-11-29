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
        return res.status(201).send({data: pokemon})
    } catch (error) {
        console.log(error)
    }  
}
