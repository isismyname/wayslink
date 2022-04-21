'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.link, {
        foreignKey: "idUser",
        as: "user"
      })
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};