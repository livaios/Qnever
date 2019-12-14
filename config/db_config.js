const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:linalina@db:5432/Qnever')
module.exports = sequelize
