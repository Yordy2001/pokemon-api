const {User}= require('../../../db')
const bycript = require('bcrypt')
const { where } = require('sequelize/dist')

module.exports = async (req, res)  =>{
    const {name, password, email} = req.body
    console.log(name, password, email)
    try {

        const user = await User.findOne({where:{email} })
        if(user !== null){
            res.redirect('/register')
        }

        const hashdPsw = await bycript.hash(password, 12)

        await User.create({
            name,
            email,
            password: hashdPsw,
        })
        res,send("done")
    } catch (error) {
        console.log(error)

    }
}
