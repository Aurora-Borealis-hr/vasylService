const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize('auroratube', 'root', 'password', config);

const Video = sequelize.define('video', {
    id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING },
    duration: { type: Sequelize.INTEGER }, 
});

const Tag = sequelize.define('tag', {
  id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
});

const Channel = sequelize.define('channel', {
  id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
});

Video.sync({force: true}).then(() => {
  return Video.create({
    name: 'John',
    description: 'this is a video',
    url: 'url here',
    duration: 123,
  });
});

Tag.sync({force: true}).then(() => {
  return Tag.create({
    name: 'go',
  });
});

Channel.sync({force: true}).then(() => {
  return Channel.create({
    name: 'go',
  });
});