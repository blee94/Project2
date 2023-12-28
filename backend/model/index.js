const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];
// const config = require('../config/config.json')['production'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;