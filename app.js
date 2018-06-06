const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongodb');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/videos', (req, res) => {
  db.newVideo(req.body, () => res.sendStatus(201));
})

app.post('/tags/:tag', (req, res) => {
  db.newTag({name: req.params.tag, numOfVideos: 0}, () => res.sendStatus(201));
})

module.exports = app.listen(process.env.PORT || process.env.NODE_ENV === 'test' ? 3001 : 3000);
