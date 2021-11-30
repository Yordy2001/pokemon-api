let auth = false

const dbModel =[
    {
        userName:"yordy",
        password:"12345"
    },

    {
        userName:"ramon",
        password:"1234567"
    },

    {
        userName:"oscar",
        password:"123456"
    }
]
module.exports = (req, res, next ) =>{
    const {userName, password} = req.body
    let user = dbModel.includes(userName)

    if(user){
        auth = true
    }
    
    console.log(user)
    if(auth){
        next()

    }else{
        res.send("user dont has acces to this part")
    }
}

