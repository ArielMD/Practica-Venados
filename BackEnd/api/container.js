const { asClass, asValue, asFunction, createContainer } = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config");

const Routes = require("../api/routes");
const StatisticRoutes = require("./routes/statistics.routes");

const { StatisticController } = require("./controllers");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    StatisticController: asClass(StatisticController).singleton(),
    StatisticRoutes: asFunction(StatisticRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  });

module.exports = container;
