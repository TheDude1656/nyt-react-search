const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "The Dead Zone",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    url: "www.google.com",
    date: new Date(Date.now())
  }, 
  {
    title: "The Catcher in the Rye",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "The Punch Escrow",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Coraline",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Steve Jobs",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Astrophysics for People in a Hurry",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "1984",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Frankenstein",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "The Great Gatsby",
    url: "www.google.com",
    date: new Date(Date.now())
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    url: "www.google.com",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
