const Video = require('../models/video').Video
const knex = require('../server.js').knex

const newVideo = (obj, callback) => {
  Video.sync().then(() => {
    return Video.findOrCreate({where: {
      name: obj.name,
      description: obj.description,
      url: obj.url,
      duration: obj.duration,
    }})
    .spread((video, created) => {
      callback && callback({ 
        video: video.get({plain: true}), 
        created: created,
      });
    });
  })
}

const getVideo = (id, callback) => {
  knex('videos').where({
    id: id
  }).select().then(data => callback(data))
}

module.exports.newVideo = newVideo;
module.exports.getVideo = getVideo;