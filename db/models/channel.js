const Sequelize = require('sequelize');
const sequelize = require('../server').sequelize

const Channel = sequelize.define('channel', {
  id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
});

module.exports.Channel = Channel;
