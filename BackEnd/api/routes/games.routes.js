const { Router } = require("express");

module.exports = function ({ GamesController }) {
  const router = Router();

  router.get("/", GamesController.getGames);
  return router;
};
