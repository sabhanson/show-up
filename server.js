const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log(`Yo server is up at http://localhost:${PORT}`);
  sequelize.sync({ force: false });
});
