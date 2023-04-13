'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasOne(models.Profile)
      user.hasMany(models.Event, {
        foreignKey: {
          name: "admin_id"
        }
      });
      user.hasMany(models.Transaction, {
        foreignKey: {
          name: "user_id"
        }
      });
    }
  }
  user.init({
    userName: {
      type: DataTypes.,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};