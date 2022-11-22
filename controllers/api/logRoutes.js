const router = require("express").Router();
const Log = require("../../models/Log");
const { withAuth, withAuthAPI } = require("../../utils/withAuth.js");

//! all routes tested on Insomnia

//* if logged in renders all logs by that user
//* if logged out redirect to login
router.get("/", withAuth, async (req, res) => {
  try {
    console.log(`${req.method} request made to /api/logs`);
    const logData = await Log.findAll({
      where: { user_id: req.session.user_id },
      order: [["created_at", "DESC"]],
    });

    const logs = logData.map((log) => log.get({ plain: true }));
    //* if no log data, renders copy to invite user to make a post
    if (logs.length === 0) {
      const noLogData = true;
      res.render("dashboard", {
        layout: "main",
        username: req.session.username,
        noLogData,
      });
      //* else, renders all of the users log data
    } else {
      res.render("dashboard", {
        layout: "main",
        username: req.session.username,
        logs,
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

//* API route for testing - shows all logs by user as JSON
router.get("/data", withAuth, async (req, res) => {
  try {
    console.log(`${req.method} request made to /api/logs/data`);
    const logData = await Log.findAll({
      where: { user_id: req.session.user_id },
    });

    const logs = logData.map((log) => log.get({ plain: true }));
    // pass username to render
    res.status(200).json(logs);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* view for newLog form
router.get("/newLog", withAuth, (req, res) => {
  try {
    console.log(`${req.method} request made to /api/logs/newLog`);
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
    console.log(`${req.method} request made to /api/logs/chartTest`);
    res.render("chartTest", {
      layout: "main",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE a new log '/api/logs/newLog'
router.post("/newLog", async (req, res) => {
  const body = req.body;
  try {
    console.log(`${req.method} request made to /api/logs/newLog`);
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

// GET logs by workout_type '/api/logs/:workout_type'
router.get("/:workout_type", async (req, res) => {
  try {
    console.log(
      `${req.method} request made to /api/logs/${req.params.workout_type}`
    );
    const logData = await Log.findAll({
      where: {
        workout_type: req.params.workout_type,
        user_id: req.session.user_id,
      },
    });

    const logs = logData.map((log) => log.get({ plain: true }));

    const workoutType = logs[0].workout_type;

    res.render("filterData", {
      layout: "main",
      logs,
      workoutType: workoutType,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json("no workout_type data");
  }
});

// GET single log by its :logId '/api/logs/singleLog/:logId'
router.get("/singleLog/:logId", async (req, res) => {
  try {
    console.log(
      `${req.method} request made to /api/logs/singleLog/:${req.params.logId}`
    );
    const singleLogData = await Log.findOne({
      where: {
        id: req.params.logId,
      },
    });
    console.log(singleLogData);
    const singleLog = singleLogData.get({ plain: true });
    console.log(singleLog);
    res.render("singleLog", {
      layout: "main",
      singleLog,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json("no workout_type data");
  }
});

// DELETE logs by :logId '/api/logs/delete/:logId'
router.delete("/delete/:logId", async (req, res) => {
  const params = req.params;
  try {
    console.log(
      `${req.method} request made to /api/logs/delete/:${req.params.logId}`
    );
    const deletedLog = await Log.destroy({
      where: {
        id: params.logId,
      },
    });

    res.status(200).json({ message: `your log ${deletedLog} was deleted` });
  } catch (err) {
    res.status(400).json({ message: `nothing deleted` });
  }
});
module.exports = router;
