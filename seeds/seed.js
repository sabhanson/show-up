const sequelize = require("../config/connection");
const { User, Log } = require("../models");

const userData = require("./userData.json");
// const logData = require("./logData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const log of logData) {
  //   await Log.create({
  //     ...log,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
