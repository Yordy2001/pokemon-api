const {User}= require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next)  =>{
    const {email, password} = req.body
    try {

        const user = await User.findOne( {where: {email}} )
        if(!user){
            return res.redirect('/login')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            res.redirect("/login")
            return
        }
        req.session.user = user
        req.session.isAuth = true
        res.redirect('/pokemon')

    } catch (error) {
        console.log(error)
    }
}
