const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  `postgres://postgres:ValarMorghulis1!@localhost:5432/Qnever`
)
module.exports = sequelize
