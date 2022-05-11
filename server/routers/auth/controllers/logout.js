
module.exports = (req, res) =>{
    req.session.isAuth = false
    res.sendStatus(200)
    return
}
