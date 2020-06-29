class GamesController {
  constructor({ GameService }) {
    this._GameService = GameService;
  }

  async getGames(req, res) {
    let games = await this._GameService.getAll();
    return res.send({
      menssage: games,
    });
  }
}

module.exports = GamesController;
