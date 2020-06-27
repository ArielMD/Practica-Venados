const { Router } = require("express");

module.exports = function ({ SponsorsController }) {
  const router = Router();

  router.get("/", SponsorsController.getSponsors);
  return router;
};
