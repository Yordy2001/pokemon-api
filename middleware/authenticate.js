module.exports = async(req, res, next ) =>{
    if(req.session === null){
        return res.redirect('/')
    }
    next()
};
