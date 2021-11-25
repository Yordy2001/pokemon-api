const {Sequelize, Datatypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

module.exports = sequelize.define('Pokemon',{
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    ability: {
        type: Datatypes.STRING,
        allowNull: false
    },
    type: {
        type: Datatypes.STRING,
        allowNull: false
    }
})

(async ()=>{
    await sequelize.sync({force:true});
})

