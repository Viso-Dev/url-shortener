const express = require("express");
const app = express();

require("dotenv").config();

const connection = require('./config/db.config');
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(express.json({
    extended: false
}));

app.use(express.static('public'));

app.use('/', require('./routes/redirect'));
app.use('/url', require('./routes/url'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Listening PORT ${PORT}`));
