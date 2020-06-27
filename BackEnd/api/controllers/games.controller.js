class GamesController {
  constructor() {}

  getGames(req, res) {
    return res.send({ menssage: "games" });
  }
}

module.exports = GamesController;
