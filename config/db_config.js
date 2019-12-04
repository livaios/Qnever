const Sequelize = require('sequelize')

// Connecting to cloud-based postgres
// const db = require('./keys').postgresURI
// const sequelize = new Sequelize(db)

// Connecting to local postgres
const sequelize = new Sequelize(
  `postgres://postgres:linalina@localhost:5432/Qnever`
)
module.exports = sequelize
