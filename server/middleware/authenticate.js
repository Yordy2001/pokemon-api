
module.exports = (req, res, next ) =>{
    console.log('paso el meddleware')
    // if(req.session.isAuth){
    next()
    // }else{
    //     res.redirect('/login')
    // }
};
