const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//! AS AN exercising person
//! I WANT an easy way to log my workouts
//! SO THAT I can keep track of my progress

class Log extends Model {}
Log.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: "log" }
);

module.exports = Log;
