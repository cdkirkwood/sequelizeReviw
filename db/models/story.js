const Sequelize = require('sequelize');
const db = require('../db');
const Host = require('./host')

const Story = db.define('story', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Story.beforeDestroy(async(story) => {
  await Host.destroy({where: {storyId: story.id}})
}) 


module.exports = Story
