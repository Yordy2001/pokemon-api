module.exports = async(req, res, next ) =>{
    req.session = null
    if(req.session === null){
        return res.redirect('auth/singIn')
    }
    next()
};
