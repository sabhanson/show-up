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
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
    workout_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // description: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    // },
    // distance: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // time: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "log",
    createdAt: true,
  }
);

module.exports = Log;
