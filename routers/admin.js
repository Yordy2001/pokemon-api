const path = require('path')

module.exports = (req, res) =>{
    user = req.session.user
    res.render(path.resolve(__dirname, '../static/templates/admin.pug'), {user})

}
