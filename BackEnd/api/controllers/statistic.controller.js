class StatisticController {
  constructor() {}

  getStatistic(req, res) {
    return res.send({ menssage: "estadisticas" });
  }
}

module.exports = StatisticController;
