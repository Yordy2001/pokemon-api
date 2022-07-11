
module.exports = async(req, res, next ) =>{

    try {
        if(req.session.isAuth){
            await next()
        }else{
            res.sendStatus(401)
        }
    } catch (error) {
        console.log(error)
    }

};
