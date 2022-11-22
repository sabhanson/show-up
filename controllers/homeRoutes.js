const router = require("express").Router();
const { loggedIn } = require("../utils/withAuth");

//* if logged in redirected to /api/logs
//* if logged out, forced to signup/login
router.get("/", loggedIn, async (req, res) => {
  try {
    console.log(`${req.method} request made to /`);
    res.render("noAuth", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* renders login form
router.get("/login", async (req, res) => {
  try {
    console.log(`${req.method} request made to /login`);
    res.render("login", {
      layout: "userControls",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* renders signup form
router.get("/signup", async (req, res) => {
  try {
    console.log(`${req.method} request made to /signup`);
    res.render("signup", {
      layout: "userControls",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
