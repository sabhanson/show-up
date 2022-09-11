const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
// Prefix all routes defined in the api directory with `/api`
router.use("/api", apiRoutes);

module.exports = router;
