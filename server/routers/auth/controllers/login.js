const {User}= require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next)  =>{
    const {email, password} = req.body
    try {

        const user = await User.findOne( {where: {email}} )
        const isMatch = await bcrypt.compare(password, user.password)
    
        if(!user || !isMatch){
            return res.send(400)
        }

        req.session.user = user
        req.session.isAuth = true
        res.json(user.email)

    } catch (error) {
        console.log(error)
    }
}
