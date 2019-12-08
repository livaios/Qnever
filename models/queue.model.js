const Sequelize = require('sequelize')

const sequelize = require('../config/db_config')
const Entity = require('./entity.model')
const Entry = require('./entry.model')

const { Model } = Sequelize

class Queue extends Model {}
Queue.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    head: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_wait_slot: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
    length: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize,
    timestamps: false
  }
)
Queue.belongsTo(Entity)
Queue.hasMany(Entry)
module.exports = Queue
