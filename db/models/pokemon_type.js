'use strict';
const {
  Model
} = require('sequelize');
const pokemon = require('./pokemon');
module.exports = (sequelize, DataTypes) => {
  class pokemon_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pokemon_type.belongsTo(pokemon)
    }
  };
  pokemon_type.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemon_type',
  });
  return pokemon_type;
};