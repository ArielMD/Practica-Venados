const { asClass, asValue, asFunction, createContainer } = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config");

const Routes = require("../api/routes");
const StatisticRoutes = require("./routes/statistics.routes");
const GamesRoutes = require("./routes/games.routes");
const NotificationsRoutes = require("./routes/notificarions.routes");
const PlayersRoutes = require("./routes/players.routes");
const SponsorsRoutes = require("./routes/sponsors.routes");

const {
  StatisticController,
  GamesController,
  NotificationsController,
  PlayersController,
  SponsorsController,
} = require("./controllers");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    StatisticController: asClass(StatisticController).singleton(),
    GamesController: asClass(GamesController).singleton(),
    NotificationsController: asClass(NotificationsController).singleton(),
    PlayersController: asClass(PlayersController).singleton(),
    SponsorsController: asClass(SponsorsController).singleton(),
  })
  .register({
    StatisticRoutes: asFunction(StatisticRoutes).singleton(),
    GamesRoutes: asFunction(GamesRoutes).singleton(),
    NotificationsRoutes: asFunction(NotificationsRoutes).singleton(),
    PlayersRoutes: asFunction(PlayersRoutes).singleton(),
    SponsorsRoutes: asFunction(SponsorsRoutes).singleton(),
  });

module.exports = container;
