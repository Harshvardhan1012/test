'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }
  contact.init({
    id: {
      type: DataTypes.ID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    phoneno: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    tableName: 'contact',
    modelName: 'contact',
  });
  return contact;
};