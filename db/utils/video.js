const Video = require('../models/video').Video

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
  Video.findOne({
    where: {
      id: id,
    }
  }).then(data => callback(data.dataValues))
}


module.exports.newVideo = newVideo;
module.exports.getVideo = getVideo;