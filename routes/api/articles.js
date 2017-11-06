const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const axios = require("axios");
// Matches with "/api/articles"
router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

router.get("/api/search", (req, res) => {
  axios
  axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${req.query.q}`)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).end());
})

module.exports = router;
