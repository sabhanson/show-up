const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
// app.use(require('./controllers/dish-routes'));
//& put in actual route file name

app.listen(PORT, () => {
  console.log(`Yo server is up at http://localhost:${PORT}`);
});
