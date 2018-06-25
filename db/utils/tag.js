const Tag = require('../models/tag').Tag
const knex = require('../server.js').knex

const newTag = (obj, callback) => {
  Tag.sync().then(() => {
    return Tag.findOrCreate({where: {name: obj.name}})
      .spread((tag, created) => {
        callback && callback({ 
          tag: tag.get({plain: true}), 
          created: created,
        });
      });
  });
}

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

module.exports.newTag = newTag;
module.exports.getTag = getTag;
module.exports.getTags = getTags;
