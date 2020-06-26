const { Router } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

module.exports = function ({ StatisticRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  apiRoute.use("/statistic", StatisticRoutes);
  router.use("/api", apiRoute);
  return router;
};
