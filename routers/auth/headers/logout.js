const login = require('../../login')

module.exports = (req, res) =>{
    req.session.isAuth = false 
    res.redirect('/login')
}