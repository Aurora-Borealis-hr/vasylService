const tagVideo = require('../models/tagVideo').tagVideo


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

module.exports.addTagToVideo = addTagToVideo;