const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./mongodb');
const videoDbHelper = require('./db/utils/video')
const tagDbHelper = require('./db/utils/tag')
const tagVideoDbHelper = require('./db/utils/tagVideo')
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/status', (req, res) => {
  res.sendStatus(200);
});

app.post('/videos', (req, res) => {
  const videoObject = {
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    duration: req.body.duration,
  }
  videoDbHelper.newVideo(videoObject, (data) => res.status(201).send(data))
})

app.get('/videos/:videoId', (req, res) => {
  videoDbHelper.getVideo(req.params.videoId, (data) => res.status(200).send(data))
})

app.post('/tags', (req, res) => {
  const videoObject = {
    name: req.body.name,
  }
  tagDbHelper.newTag(videoObject, (data) => res.status(201).send(data))
})

app.post('/videos/tags', (req, res) => {
  const obj = {
    videoId: req.body.videoId,
    tagId: req.body.tagId,
  }
  tagVideoDbHelper.addTagToVideo(obj, (data) => res.status(201).send(data))
})

app.post('/tags/videos')

module.exports = app.listen(process.env.PORT || process.env.NODE_ENV === 'test' ? 3001 : 3000);
