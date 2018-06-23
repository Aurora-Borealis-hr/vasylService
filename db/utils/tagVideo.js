const tagVideo = require('../models/tagVideo').tagVideo
const knex = require('../server.js').knex


//check first if video and tag exists first
const addTagToVideo = (obj, callback) => {
  tagVideo.sync().then(() => {
    return tagVideo.findOrCreate({where: {videoId: obj.videoId, tagId: obj.tagId}})
      .spread((tag, created) => {
        callback && callback({ 
          tagVideo: tag.get({plain: true}), 
          created: created,
        });
      });
  });
}

const getTagsForVideo = (videoId, callback) => {
  knex('tagvideo').where({
    videoid: videoId
  }).select('tagid').then(data => callback(data))
}

module.exports.addTagToVideo = addTagToVideo;
module.exports.getTagsForVideo = getTagsForVideo;
