const session = require("express-session");
const db = require('../pokemon-api/db')
const SequelizeStore = require("connect-session-sequelize")(session);

const store = new SequelizeStore({
    db: db
})

module.exports = session({
    secret: "Pokemon auth",
    resave: false,
    saveUninitialized: false,
    store:store
    // store: new SequelizeStore({
    //     db: User,
    // }),
})
