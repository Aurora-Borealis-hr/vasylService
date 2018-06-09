const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize('auroratube', 'root', 'password', config);

module.exports.sequelize = sequelize;
