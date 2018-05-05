const Sequelize = require('sequelize');
const db = require('../db');

const Sector = db.define('sector', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Sector
