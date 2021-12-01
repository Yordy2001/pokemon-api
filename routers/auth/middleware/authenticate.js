const { User } = require('../../../db')

module.exports = async(req, res, next ) =>{
    const {userName, password} = req.body
    console.log(userName, password)
    const user = await User.findOne( {where: {name: userName, password: password }} )

    if(user === null){
        console.log('user not found')
        
    }else{
        console.log('this user ' + user.name + ' found')
        next()
    }
}
