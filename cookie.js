const session = require("express-session");
const db = require('./db/index')
const SequelizeStore = require("connect-session-sequelize")(session.Store);


module.exports = session({
    secret: "Pokemon auth",
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db,
        table:'User'
    }),
})
