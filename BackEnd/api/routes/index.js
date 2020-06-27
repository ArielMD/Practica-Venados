const { Router } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

module.exports = function ({
  StatisticRoutes,
  GamesRoutes,
  NotificationsRoutes,
  PlayersRoutes,
  SponsorsRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  apiRoute.use("/statistic", StatisticRoutes);
  apiRoute.use("/games", GamesRoutes);
  apiRoute.use("/notifications", NotificationsRoutes);
  apiRoute.use("/playes", PlayersRoutes);
  apiRoute.use("/sponsors", SponsorsRoutes);

  router.use("/api", apiRoute);
  return router;
};
