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
      Pokemon.hasMany(models.pokemon_type, {
        foreignKey:'pokemon_type',
      })
      Pokemon.hasMany(models.pokemon_ability, {
        foreignKey:'pokemon_ability',
      })
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};