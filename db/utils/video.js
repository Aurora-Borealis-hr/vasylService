const knex = require('../server.js').knex

const getVideo = (id, callback) => {
  knex('videos').where({
    id: id
  }).select().then(data => callback(data))
}

module.exports.getVideo = getVideo;