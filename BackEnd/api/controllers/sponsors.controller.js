class SponsorsController {
  constructor() {}

  getSponsors(req, res) {
    return res.send({ menssage: "sponsors" });
  }
}

module.exports = SponsorsController;
