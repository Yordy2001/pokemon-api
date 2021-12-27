
module.exports = (req, res) =>{
    req.session.isAuth = false
    res.redirect('/login')
    return
}
