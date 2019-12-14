const Sequelize = require('sequelize')

const sequelize = require('../config/db_config.js')

const { Model } = Sequelize
const { Queue } = require('./queue.model')
const { User } = require('./user.model')
class Entry extends Model {}
Entry.init(
  {
    position: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    is_done: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    entry_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    completion_time: {
      type: Sequelize.DATE
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false
  }
)
module.exports = Entry
