const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");
// Matches with "/api/articles"
router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router.get("/api/search", (req, res) => {
  axios
  axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${req.query.q}&begin_date=${req.query.beginDate}0101&end_date=${req.query.endDate}1231`)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).end());
})

module.exports = router;
