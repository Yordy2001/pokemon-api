const jwt = require('jsonwebtoken')
const { User } = require('../db')

module.exports = async(req, res, next ) =>{
    const token = req.headers.authorization

    try {
        const authEntity = jwt.verify(token)
        console.log(authEntity.userName)

        const user = await User.findOne( {where: {name: userName, password: password }} )
        if(user === null){
            res.send('user not found')
        }

        console.log('this user ' + user.name + ' found')
        next()

    } catch (error) {
        console.log(error)
        // return res.status(401).send({
        //     message: 'The token is invalid or has not been provided.',
    // });
    }
};
