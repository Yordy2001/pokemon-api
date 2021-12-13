
module.exports = async(req, res, next ) =>{
    if(req.session.isNew){
       next()
    }else{
        res.redirect('/login')
    }
    
};
