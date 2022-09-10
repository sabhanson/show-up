const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

//! AS AN exercising person
//! I WANT an easy way to log my workouts
//! SO THAT I can keep track of my progress

Log.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
