'use strict';
const {
  Model
} = require('sequelize');
const pokemon_type = require('./pokemon_type');
const pokemon_ability = require('./pokemon_ability');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon.belongsTo(models.pokemon_ability)
      
      Pokemon.belongsTo(models.pokemon_type)

      Pokemon.belongsTo(models.User)
    }

  };
  Pokemon.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    owner: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Pokemon',
  });
  return Pokemon;
};