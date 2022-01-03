'use strict';
const {
  Model
} = require('sequelize');
const pokemon = require('./pokemon');
module.exports = (sequelize, DataTypes) => {
  class pokemon_ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pokemon_ability.belongsTo(pokemon)
    }
  };
  pokemon_ability.init({
    ability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemon_ability',
  });
  return pokemon_ability;
};