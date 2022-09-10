const router = require("express").Router();

// Import the model
const Log = require("../../models/Log");

// CREATE a log
router.post("/", async (req, res) => {
  try {
    const newLog = await Log.create({
      ...req.body,
      // workout_type and details
    });

    res.status(200).json(newLog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
