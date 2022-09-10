const router = require("express").Router();
const logRoutes = require("./logRoutes");

// Prefix all routes defined in `logRoutes.js` with `/logs
router.use("/logs", logRoutes);

module.exports = router;
