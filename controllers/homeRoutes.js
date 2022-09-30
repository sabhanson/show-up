const router = require("express").Router();
const { loggedIn } = require("../utils/withAuth");
//! all routes tested on Insomnia
router.get("/", loggedIn, async (req, res) => {
  try {
    res.render("noAuth", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
