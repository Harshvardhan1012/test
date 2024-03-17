'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('user', [{
      firstName: "harsh",
      lastName: "ss",
      email: "hs$9w9"

    }])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('user');
  }
};
