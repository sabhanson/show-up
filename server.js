// dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// connect to sequelize
const sequelize = require("./config/connection");

// connect to handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Yo server is up at http://localhost:${PORT}")
  );
});
