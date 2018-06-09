const Sequelize = require('sequelize');
const sequelize = require('../server').sequelize

const Tag = sequelize.define('tag', {
  id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
});

module.exports.Tag = Tag;
