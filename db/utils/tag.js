const knex = require('../server.js').knex

const getTag = (id, callback) => {
  return new Promise((resolve) => {
    knex('tags').where({
      id: id
    }).select().then((data) => resolve(data))
  })
}

const getTags = (ids, callback) => {
    knex('tags').whereIn('id', ids).select('name').then((data) => callback(data))
}

module.exports.getTag = getTag;
module.exports.getTags = getTags;
