const Story = require('./story')
const Sector = require('./sector')
const Host = require('./host')

Story.hasMany(Host)
Host.belongsTo(Story)

Sector.hasMany(Host)
Host.belongsTo(Sector)



module.exports = {
  Story,
  Sector,
  Host
}
