const Sequelize = require('sequelize')

const sequelize = require('../config/DBConfig')

const { Model } = Sequelize

class Entry extends Model {}
Entry.init(
  {
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.INTEGER
    },
    is_done: {
      type: Sequelize.BOOLEAN
    },
    entry_time: {
      type: Sequelize.TIME
    },
    completion_time: {
      type: Sequelize.TIME
    }
  },
  {
    sequelize,
    timestamps: false
  }
)
Entry.belongsTo(Queue)
Entry.belongsTo(User)
module.exports = User
