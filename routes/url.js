const express = require("express");
const validURL = require("valid-url");
const shortID = require("shortid");

const router = express.Router();

const URL = require("../models/urlModel");

const baseURL = process.env.BASE_URL || "http://localhost:8000";

router.post("/shorten", async (req, res) => {
  const { longURL } = req.body;

  if (!validURL.isUri(baseURL)) {
    return res.status(401).json("Invalid base URL");
  }

  const urlCode = shortID.generate();

  if (validURL.isUri(longURL)) {
    try {
      let url = await URL.findOne({longURL});

      if (url) {
        res.json(url)
      } else {
        const shortURL = baseURL + '/' + urlCode;

        url = new URL({
          longURL,
          shortURL,
          urlCode,
          date: new Date()
        })
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid longURL");
  }
})

module.exports = router;
