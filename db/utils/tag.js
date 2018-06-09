const Tag = require('../models/tag').Tag

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

module.exports.newTag = newTag;