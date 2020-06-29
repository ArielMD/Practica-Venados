class StatisticController {
  constructor({ StatisticService }) {
    this._StatisticService = StatisticService;
  }

  async getStatistic(req, res) {
    let statistics = await this._StatisticService.getAll();
    return res.send({
      menssage: statistics,
    });
  }
}

module.exports = StatisticController;
