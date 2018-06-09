const Sequelize = require('sequelize');
const sequelize = require('../server').sequelize

const VideoTag = sequelize.define('videoTag', {
  videoId:{ type: Sequelize.INTEGER },
  tagId:{ type: Sequelize.INTEGER },
});

module.exports.VideoTag = VideoTag;