'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pokemons', [{
      name: 'Celesteela',
      ability: ['Beast', 'Boost'],
      type: ['stell', 'flying'],
      createdAt: new Date(),
      updatedAt: new Date()

    }], {})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bultDelete('Pokemons', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
