const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  urlCode: String,
  longURL: String,
  shortURL: String,
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model("model", schema);
