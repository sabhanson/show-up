const router = require("express").Router();
const Log = require("../../models/Log");

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

// GET all logs
router.get("/", (req, res) => {
  try {
    const logData = Log.findAll();

    res.status(200).json(logData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
