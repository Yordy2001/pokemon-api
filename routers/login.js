const path = require('path')

module.exports = (req, res) =>{
    res.sendFile(path.resolve(__dirname, './templates/login.htm'))

}
