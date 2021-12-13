const {User}= require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res)  =>{
    const {email, password} = req.body
    // res.send("done")
    try {

        const user = await User.findOne( {where: {email}} )
        if(!user){
            return res.send('not found')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.send("incorrect password")
        }

        req.session.isNew = false
        // res.redirect('/pokemon')

    } catch (error) {
        console.log(error)
    }
}
