const mongoose = require("mongoose");

const username = "nolanfreeman";
const password = process.env.MONGO_PASS;
const cluster = "cluster0.hj8xjze";
const dbname = "";

const URI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
