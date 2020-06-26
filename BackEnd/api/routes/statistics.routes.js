const { Router } = require("express");

module.exports = function ({ StatisticController }) {
  const router = Router();

  router.get("/", StatisticController.getStatistic);
  return router;
};
