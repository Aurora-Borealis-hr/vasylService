const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const router = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

module.exports = app;