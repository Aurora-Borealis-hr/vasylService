const app = require('./app')
const videoDbHelper = require('../db/utils/video')
const tagDbHelper = require('../db/utils/tag')
const tagVideoDbHelper = require('../db/utils/tagVideo')

const status = (req, res) => {
  res.sendStatus(200);
}

const newVideo = (req, res) => {
  const videoObject = {
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    duration: req.body.duration,
  }
  videoDbHelper.newVideo(videoObject, (data) => res.status(201).send(data))
}

const getVideo = (req, res) => {
  videoDbHelper.getVideo(req.params.videoId, (data) => res.status(200).send(data))
}

const newTag = (req, res) => {
  const videoObject = {
    name: req.body.name,
  }
  tagDbHelper.newTag(videoObject, (data) => res.status(201).send(data))
}

const tagVideo = (req, res) => {
  const obj = {
    videoId: req.body.videoId,
    tagId: req.body.tagId,
  }
  tagVideoDbHelper.addTagToVideo(obj, (data) => res.status(201).send(data))
}


// app.post('/tags/videos')

module.exports.getVideo = getVideo;
module.exports.status = status;
module.exports.newVideo = newVideo;
module.exports.newTag = newTag;
module.exports.tagVideo = tagVideo;
