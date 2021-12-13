const {User}= require('../../../db')
const bycript = require('bcrypt')

module.exports = async (req, res)  =>{
    console.log("registrado")
    const {firstName, password, email} = req.body
    try {

        const user = await User.findOne({where:{email} })
        if(user){
            return res.redirect('/register')
        }

        const hashdPsw = await bycript.hash(password, 12)

        await User.create({
            firstName,
            email,
            password: hashdPsw,
        })
        res.redirect("/login")
    } catch (error) {
        console.log(error)

    }
}
