const { Router } = require("express");

module.exports = function ({ PlayersController }) {
  const router = Router();

  router.get("/", PlayersController.getPlayers);
  return router;
};
