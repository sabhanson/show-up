const router = require("express").Router();
const { Log } = require("../models/");

// get all posts for homepage
router.get("/home", async (req, res) => {
  try {
    const logData = await Log.findAll();

    const logs = logData.map((log) => log.get({ plain: true }));

    res.render("dashboard", {
      layout: "main",
      logs,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
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
