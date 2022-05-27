const { User } = require('../../../db')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await User.findOne({ where: { email } })
        const isMatch = await bcrypt.compare(password, user.password)

        if (!user || !isMatch) {
            return res.sendStatus(400)
        }

        req.session.user = user
        req.session.isAuth = true
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
    }
}
