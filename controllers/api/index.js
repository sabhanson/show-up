const router = require("express").Router();
const logRoutes = require("./logRoutes");
const userRoutes = require("./userRoutes");

// Prefix all routes defined in `logRoutes.js` with `/logs
router.use("/logs", logRoutes);
router.use("/users", userRoutes);

module.exports = router;
