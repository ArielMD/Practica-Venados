class PlayersController {
  constructor({ PlayerService }) {
    this._PlayerService = PlayerService;
  }

  async getPlayers(req, res) {
    let players = await this._PlayerService.getAll();
    return res.send({
      menssage: players,
    });
  }
}

module.exports = PlayersController;
