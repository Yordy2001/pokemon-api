
module.exports = async(req, res, next ) =>{
    try {
        console.log('paso el meddleware')
        // if(req.session.isAuth){
        await next()
        // }else{
        //     res.redirect('/login')
        // }
    } catch (error) {
        console.log(error)
    }
    
};
