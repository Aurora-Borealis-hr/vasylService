const app = require('./app')
const videoDbHelper = require('../db/utils/video')
const tagDbHelper = require('../db/utils/tag')
const tagVideoDbHelper = require('../db/utils/tagVideo')
const axios = require('axios')
var nock = require('./nock');

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
  videoDbHelper.getVideo(req.params.videoId, (videoObj) => {
    tagVideoDbHelper.getTagsForVideo(req.params.videoId, (tagsids) => {
      var tags = tagsids.map((el) => el.tagid)
      tagDbHelper.getTags(tags, (data) => {     
        var tagsstring = '';
        data.forEach((el) => tagsstring += el.name + ',' );
        var params = tagsstring.slice(0, tagsstring.length -1);
        params = data.map((el) => el.name)
        axios.get('http://adsService/ads', {
          params: {
            userId: req.cookies.userId,
            tags: params
          }
        })
        .then(function (response) {
          res.send( {video: videoObj[0],ad:response.data})
          ;
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    })
  })
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

const getTagsForVideo = (req, res) => {
  tagVideoDbHelper.getTagsForVideo(req.params.videoId, (data) => res.status(200).send(data) )
}


  

module.exports.status = status;
module.exports.getVideo = getVideo;
module.exports.newVideo = newVideo;
module.exports.newTag = newTag;
module.exports.tagVideo = tagVideo;
module.exports.getTagsForVideo = getTagsForVideo;
