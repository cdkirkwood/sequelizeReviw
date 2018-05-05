const Sequelize = require('sequelize');
const db = require('../db');

const Host = db.define('host', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  currentRole: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pastRoles: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Host
