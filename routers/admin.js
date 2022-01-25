const path = require('path')

module.exports = (req, res) =>{
    const user = req.session.user.firstName
    res.render(path.resolve(__dirname, '../static/templates/admin.pug'), {user})

}
