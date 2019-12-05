const Sequelize = require('sequelize')

const sequelize = require('../config/db_config.js')
const Entry = require('./entry.model')

const { Model } = Sequelize

class User extends Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    timestamps: false
  }
)

module.exports = User
