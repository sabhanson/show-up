const router = require("express").Router();
const { loggedIn } = require("../utils/withAuth");
//! all routes tested on Insomnia
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
