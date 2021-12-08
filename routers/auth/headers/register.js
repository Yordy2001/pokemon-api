const {User}= require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res)  =>{
    const {userName, email, password } = req.body
    console.log("redirecting...")
    try {

        const user = await User.findOne( {where: {email: email}} )
        if(user){
            return res.redirect('/register')
            
        }
        const hashedPsw = await bcrypt.hash(password, 12)

        await User.create({
            firstName: userName,
            email,
            password: hashedPsw,
        });


        res.redirect('/login')
    } catch (error) {
        console.log(error)

    }
}
