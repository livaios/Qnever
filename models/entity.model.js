const Sequelize = require('sequelize')

const sequelize = require('../config/db_config.js')

const { Model } = Sequelize

class Entity extends Model {}
Entity.init(
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
module.exports = Entity
