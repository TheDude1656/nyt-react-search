import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(query) {
    return axios.get("/api/articles/api/search", { params: query});
  },

  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};


