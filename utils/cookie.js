const jwt = require('jsonwebtoken')

module.exports = ({userName, password}) => {
    const cookie = jwt.sign(
        {
            userName,
            password
        }
        
    )
}
