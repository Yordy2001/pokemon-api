
module.exports = (req, res) =>{
    req.session.isAuth = false
    res.send(200)
    return
}
