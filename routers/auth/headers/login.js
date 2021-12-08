const {User}= require('../../../db')
const bcrypt = require('bcrypt')


module.exports = async (req, res)  =>{
    res.send("login")
   const {email, password} = req.body
    try {

        const user = await User.findOne( {where: {email}} )
        if(!user){
            return res.send('not found')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.send("incorrect password")
        }
        
        res.redirect('/Pokemon')
    } catch (error) {
        console.log(error)
    }
}
