const path = require('path')

module.exports = (req, res) =>{
    let user = req.session.user
    res.render(path.resolve(__dirname, '../views/admin.pug'),{ user })
}
