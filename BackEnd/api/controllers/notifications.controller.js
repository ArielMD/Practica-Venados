class NotificationsController {
  constructor({ NotificationService }) {
    this._NotificationService = NotificationService;
  }

  async getNotifications(req, res) {
    let notifications = await this._NotificationService.getAll();
    return res.send({
      menssage: notifications,
    });
  }
}

module.exports = NotificationsController;
