const Sequelize = require('sequelize');
const sequelize = require('../server').sequelize

const Video = sequelize.define('video', {
  id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  duration: { type: Sequelize.INTEGER }, 
});

module.exports.Video = Video;