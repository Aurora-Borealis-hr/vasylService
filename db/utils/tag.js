const Tag = require('../models/tag').Tag

const newTag = (obj, callback) => {
  Tag.sync().then(() => {
    return Tag.create({
      name: obj.name,
    })
    .then(() => Tag.findOrCreate({where: {name: obj.name}}))
    .spread((tag, created) => {
      callback({ 
        tag: tag.get({plain: true}), 
        created: created,
      });
    });
  })
}