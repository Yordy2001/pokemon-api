const {User}= require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next)  =>{
    const {email, password} = req.body
    try {

        const user = await User.findOne( {where: {email}} )
        if(!user){
            return res.send('not found')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            alert("incorrect password")
            res.render("/login")
        }

        req.session.isAuth = true
  
        res.redirect('/pokemon')

    } catch (error) {
        console.log(error)
    }
}
