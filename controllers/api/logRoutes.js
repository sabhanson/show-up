const router = require("express").Router();
const Log = require("../../models/Log");
const { withAuth, withAuthAPI } = require("../../utils/withAuth.js");

// GET all logs '/api/logs'
router.get("/", withAuthAPI, async (req, res) => {
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

// GET biking logs '/api/logs/:type'
router.get("/:type", async (req, res) => {
  try {
    const logData = await Log.findAll({
      where: {
        workout_type: req.params.type,
      },
    });

    const logs = logData.map((log) => log.get({ plain: true }));

    const workoutType = logs[0].workout_type;

    res.render("filterData", {
      layout: "main",
      logs,
      workoutType: workoutType,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

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

// CREATE/POST a new log '/api/logs/newLog'
router.post("/newLog", async (req, res) => {
  const body = req.body;
  try {
    const newLog = await Log.create({
      workout_type: body.workout_type,
      details: body.details,
      // workout_type and details
    });

    res.status(200).json(newLog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
