const {Sequelize, Op, Model, DataTypes} =require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

try{
    sequelize.authenticate();
    console.log("successfully")
}catch(err){
    console.error("declaind", err)
}