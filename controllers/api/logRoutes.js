const router = require("express").Router();
const Log = require("../../models/Log");
const { withAuth, withAuthAPI } = require("../../utils/withAuth.js");

//! all routes tested on Insomnia
let noLogs;

// GET the "create new log" form '/api/logs/newLog'
router.get("/newLog", (req, res) => {
  try {
    res.render("newLog", {
      layout: "main",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET the "chartTest" view '/api/logs/chartTest'
router.get("/chartTest", (req, res) => {
  try {
    res.render("chartTest", {
      layout: "main",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE/POST a new log '/api/logs/newLog'
router.post("/newLog", async (req, res) => {
  const body = req.body;
  try {
    const newLog = await Log.create({
      workout_type: body.workout_type,
      details: body.details,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET logs by workout_type '/api/logs/:type'
router.get("/:workout_type", async (req, res) => {
  try {
    let workoutType;
    const logData = await Log.findAll({
      where: {
        workout_type: req.params.workout_type,
        user_id: req.session.user_id,
      },
    });

    const logs = logData.map((log) => log.get({ plain: true }));
    if (logs.length === 0) {
      noLogs = true;
      workoutType = "";
    } else {
      // noLogs = false;
      workoutType = logs[0].workout_type;
    }

    res.render("filterData", {
      layout: "main",
      logs,
      noLogs: noLogs,
      // workoutType: workoutType,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json("no workout_type data");
  }
});

module.exports = router;
