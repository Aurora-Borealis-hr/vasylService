const Channel = require('../models/channel').Channel


Channel.sync({force: true}).then(() => {
  return Channel.create({
    name: 'go',
  });
});