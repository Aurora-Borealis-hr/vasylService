const knex = require('../server.js').knex

const getTagsForVideo = (videoId, callback) => {
  knex('tagvideo').where({
    videoid: videoId
  }).select('tagid').then(data => callback(data))
}

module.exports.getTagsForVideo = getTagsForVideo;
