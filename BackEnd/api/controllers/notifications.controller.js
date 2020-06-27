class NotificationsController {
  constructor() {}

  getNotifications(req, res) {
    return res.send({ menssage: "notificatios" });
  }
}

module.exports = NotificationsController;
