const {Sequelize, Op, Model, DataTypes} = require("sequelize")
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: '../db.sqlite'
});

try{
    sequelize.authenticate();
    console.log("successfully")
}catch(err){
    console.error("declaind", err)
}