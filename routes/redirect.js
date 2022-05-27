const express = require('express');

const router = express.Router();

const URL = require('../models/urlModel');

router.get('/:code', async (req, res) => {
    try {
        const url = await URL.findOne({ urlCode: req.params.code });

        if (url) {
            return res.redirect(url.longURL);
        } else {
            return res.status(404).json('No URL Found');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
})

module.exports = router;
