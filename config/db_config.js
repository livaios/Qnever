const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'postgres://postgres:badr@localhost:5432/Qnever'
)
module.exports = sequelize
