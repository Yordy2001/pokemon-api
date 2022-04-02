const {Pokemon} = require('../../../db')

module.exports = async (req, res)=> {
    try {
        const pokemon = await Pokemon.findAll({
            where: {id: req.params.id}
        });
        
      return res.send( pokemon )
    } catch (error) {
        console.log(error)
    }  
}
