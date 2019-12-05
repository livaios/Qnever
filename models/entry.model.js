const Sequelize = require('sequelize')

const sequelize = require('../config/db_config.js')

const { Model } = Sequelize
const { Queue } = require('./queue.model')
const { User } = require('./user.model')
class Entry extends Model {}
Entry.init(
  {
    position: {
      type: Sequelize.INTEGER
    },
    is_done: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    entry_time: {
      type: Sequelize.DATE
    },
    completion_time: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    timestamps: false
  }
)

module.exports = Entry
