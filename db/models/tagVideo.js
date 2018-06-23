const Sequelize = require('sequelize');
const sequelize = require('../server').sequelize

const tagVideo = sequelize.define('tagVideo', {
  videoId:{ type: Sequelize.INTEGER },
  tagId:{ type: Sequelize.INTEGER },
});

module.exports.tagVideo = tagVideo;

const Knex = require('knex');
const knex = require('../server').knex