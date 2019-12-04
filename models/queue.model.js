const Sequelize = require('sequelize')

const sequelize = require('../config/db_config.js')

const { Model } = Sequelize

class Queue extends Model {}
Queue.init(
  {
    head: {
      type: Sequelize.INTEGER
    },
    avg_wait_slot: {
      type: Sequelize.DOUBLE
    }
  },
  {
    sequelize,
    timestamps: false
  }
)
Queue.belongsTo(Entity)
module.exports = Queue
