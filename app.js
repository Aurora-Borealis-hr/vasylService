const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongodb');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
  console.log(process.env.NODE_ENV)
  res.send('Hello world');
});

app.post('/new-user', (req, res) => {
  db.saveVideo(req.body, () => res.sendStatus(201));
})

module.exports = app.listen(process.env.PORT || process.env.NODE_ENV === 'test' ? 3001 : 3000);
