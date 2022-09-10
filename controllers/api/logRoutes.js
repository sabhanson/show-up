const router = require("express").Router();
const Log = require("../../models/Log");

// GET all logs
router.get("/", async (req, res) => {
  try {
    const logData = await Log.findAll();

    const logs = logData.map((log) => log.get({ plain: true }));

    res.render("dashboard", {
      logs,
    });
    res.status(200).json(logs);
  } catch (err) {
    res.status(400).json(err);
  }
});
// CREATE a log
router.post("/", async (req, res) => {
  try {
    const newLog = await Log.create({
      workout_type: req.body.workout_type,
      details: req.body.details,
      // workout_type and details
    });

    res.status(200).json(newLog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
