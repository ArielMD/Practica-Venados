const { Router } = require("express");

module.exports = function ({ NotificationsController }) {
  const router = Router();

  router.get("/", NotificationsController.getNotifications);
  return router;
};
