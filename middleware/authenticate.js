const db = require('../db')
const session = require("express-session");


const SequelizeStore = require("connect-session-sequelize")(session.Store);

module.exports = async(req, res, next ) =>{
    session({
        secret: "Pokemon auth",
        resave: false,
        saveUninitialized: true,
        // store: new SequelizeStore({
        //     db:db,
        // }),
        // resave: false, 
        // proxy: false, 
    })
    next()
};
