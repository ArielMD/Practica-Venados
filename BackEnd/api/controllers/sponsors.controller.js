class SponsorsController {
  constructor({ SponsorService }) {
    this._SponsorService = SponsorService;
  }

  async getSponsors(req, res) {
    let sponsors = await this._SponsorService.getAll();
    return res.send({
      menssage: sponsors,
    });
  }
}

module.exports = SponsorsController;
