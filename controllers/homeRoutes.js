const router = require("express").Router();
const Log = require("../models/Log");
const { withAuth, loggedIn } = require("../utils/withAuth");

let noLogs;
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

router.get("/login", loggedIn, async (req, res) => {
  try {
    res.render("login", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/signup", loggedIn, async (req, res) => {
  try {
    res.render("signup", {
      layout: "noAuth",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const logData = await Log.findAll({
      where: { user_id: req.session.user_id },
    });

    const logs = logData.map((log) => log.get({ plain: true }));

    if (logs.length === 0) {
      noLogs = true;
    }
    // pass username to render
    res.render("dashboard", {
      layout: "main",
      username: req.session.username,
      noLogs: noLogs,
      logs,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/newLog", withAuth, (req, res) => {
  try {
    res.render("newLog", {
      layout: "main",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
