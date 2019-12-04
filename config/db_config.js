const Sequelize = require('sequelize')

// Connecting to cloud-based postgres
const db = require('./keys').postgresURI
const sequelize = new Sequelize(db)

// Connecting to local postgres
const walletUrl = ''
const sequelize = new Sequelize(walletUrl)
const sequelize = new Sequelize('Qnever', 'postgres', 'linalina', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize
