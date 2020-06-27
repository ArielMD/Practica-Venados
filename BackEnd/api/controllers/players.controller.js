class PlayersController {
  constructor() {}

  getPlayers(req, res) {
    return res.send({ menssage: "players" });
  }
}

module.exports = PlayersController;
