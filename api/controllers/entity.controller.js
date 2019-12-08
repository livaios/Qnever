const Sequelize = require('sequelize')
const Entity = require('../../models/entity.model')
const Queue = require('../../models/queue.model')
const Entry = require('../../models/entry.model')
const { Op } = Sequelize

const registerEntity = async (req, res) => {
  try {
    // validation
    const { username, password } = req.body
    const name_exist = await Entity.findOne({
      where: {
        username
      }
    })
    if (name_exist) {
      return res.json('Username taken')
    }
    const entity = await Entity.create({
      username,
      password
    })
    return res.send(entity)
  } catch (e) {
    return res.json('Something went wrong')
  }
}

const loginEntity = async (req, res) => {
  try {
    //validation
    const { username, password } = req.body
    const name_exist = await Entity.findOne({
      where: {
        username
      }
    })
    if (!name_exist) {
      return res.json('Username invalid')
    }
    const password_valid = await Entity.findOne({
      where: { username, password },
      attributes: ['password']
    })
    if (!password_valid) {
      return res.json('Incorrect password')
    }
    return res.send('jwt!!')
    // jwt
  } catch (e) {
    return res.json('Something went wrong')
  }
}

const viewEntities = async (req, res) => {
  try {
    const entities = await Entity.findAll()
    return res.send(entities)
  } catch (e) {
    return res.json('Something went wrong')
  }
}
const createQueue = async (req, res) => {
  try {
    const { name, owner_id } = req.body
    //val
    const check_owner = await Entity.findByPk(owner_id)
    if (!check_owner) {
      return res.json('invalid owner id')
    }
    const queue = await Queue.create({
      name,
      EntityId: owner_id
    })
    return res.send(queue)
  } catch (e) {
    return res.json('Something went wrong')
  }
}
const viewQueue = async (req, res) => {
  try {
    const { owner_id } = req.body
    const check_owner = await Entity.findByPk(owner_id)
    if (!check_owner) {
      return res.json('invalid owner id')
    }
    //val
    const queue = await Queue.findAll({
      where: { EntityId: owner_id }
    })
    return res.send(queue)
  } catch (e) {
    return res.json('Something went wrong')
  }
}
const deleteQueue = async (req, res) => {
  try {
    const { id } = req.body
    const check_queue = await Queue.findByPk(id)
    if (!check_queue) {
      return res.json('invalid queue id')
    }
    //val
    const queue = await Queue.drop({
      where: { id }
    })
    return res.send(queue)
  } catch (e) {
    return res.json('Something went wrong')
  }
}
const next = async (req, res) => {
  try {
    const { queue_id, entity_id } = req.body
    const queue = await Queue.findByPk(queue_id)
    if (entity_id != queue.EntityId) {
      return res.json('Unauthorized Entity')
    }
    if (queue.head > queue.length) {
      return res.json('Empty queye')
    }
    const up_entry = await Entry.update(
      {
        is_done: true,
        completion_time: new Date()
      },
      {
        returning: true,
        where: {
          position: queue.head,
          QueueId: queue_id
        }
      }
    )

    const getQ = await Entry.findOne({
      where: {
        position: queue.head,
        QueueId: queue_id
      }
    })
    const dop =
      Math.abs(getQ.entry_time.getTime() - getQ.completion_time.getTime()) /
      (2 * 60 * 1000)
    console.log(dop)
    const up_queue = await Queue.update(
      {
        head: ++queue.head,
        avg_time_slot: dop
      },
      { returning: true, where: { id: queue_id } }
    )
    return res.send({ up_entry, up_queue })
  } catch (e) {
    console.log(e)
    return res.json('Something went wrong')
  }
}
module.exports = {
  registerEntity,
  loginEntity,
  viewEntities,
  createQueue,
  viewQueue,
  deleteQueue,
  next
}
