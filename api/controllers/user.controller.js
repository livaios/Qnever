const Sequelize = require('sequelize')
const User = require('../../models/user.model')
const Queue = require('../../models/queue.model')
// const passport = require('passport')
const jwt = require('jsonwebtoken')

const Entry = require('../../models/entry.model')

const { Op } = Sequelize

const registerUser = async (req, res) => {
  try {
    // validation
    const { username, password } = req.body
    const name_exist = await User.findOne({
      where: {
        username
      }
    })
    if (name_exist) {
      return res.json('Username taken')
    }
    const user = await User.create({
      username,
      password
    })
    return res.send(user)
  } catch (e) {
    return res.json('Something went wrong')
  }
}

const loginUser = async (req, res) => {
  try {
    //validation
    const { username, password } = req.body
    const name_exist = await User.findOne({
      where: {
        username
      }
    })
    if (!name_exist) {
      return res.json('Username invalid')
    }
    const password_valid = await User.findOne({
      where: { username, password }
    })
    if (!password_valid) {
      return res.json('Incorrect password')
    }
    const payLoad = { userId: password_valid.id, userType: 'user' }
    const token = jwt.sign(payLoad, 'secret', {
      expiresIn: 3231231231231 // expires in 24 hours
    })
    return res.status(200).send({ auth: true, token, password_valid })
  } catch (e) {
    console.log(e)
    return res.json('Something went wrong')
  }
}
const viewUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.send(users)
  } catch (e) {
    return res.json('Something went wrong')
  }
}
const joinQueue = async (req, res) => {
  try {
    const decode = jwt.verify(req.headers.authorization.split(' ')[1], 'secret')
    const { userType, userId } = decode
    if (userType != 'user') {
      return res.json('unauthorized')
    }
    const check_owner = await Entity.findByPk(userId)
    if (!check_owner) {
      return res.json('invalid owner id')
    }
    const { queue_id } = req.body
    const queue = await Queue.findByPk(queue_id)
    if (!queue) {
      return res.json('Queue not found')
    }
    const entries = await Entry.findOne({
      where: { UserId: userId, QueueId: queue_id }
    })
    if (entries) {
      return res.json('Already registered in queue')
    }
    const updated_length = ++queue.length
    const entry = await Entry.create({
      UserId: userId,
      QueueId: queue_id,
      entry_time: await new Date(),
      position: updated_length
    })
    let head = queue.head
    if (head == 0) {
      head = 1
    }
    const up_queue = await Queue.update(
      {
        length: updated_length,
        head
      },
      { returning: true, where: { id: queue_id } }
    )
    return res.send({ up_queue, entry })
  } catch (e) {
    console.log(e)
    return res.json('Something went wrong')
  }
}
const checkPos = async (req, res) => {
  try {
    const decode = jwt.verify(req.headers.authorization.split(' ')[1], 'secret')
    const { userType, userId } = decode
    if (userType != 'user') {
      return res.json('unauthorized')
    }
    const check_owner = await Entity.findByPk(userId)
    if (!check_owner) {
      return res.json('invalid owner id')
    }
    const { queue_id } = req.body
    const entry = await Entry.findOne({
      where: { UserId: userId, QueueId: queue_id }
    })
    if (entry.is_done) {
      return res.json('Your turn has passeds')
    }
    const queue = await Queue.findByPk(queue_id)
    const people_remaining = entry.position - queue.head
    let waiting_time
    if (!queue.avg_wait_slot) {
      waiting_time = people_remaining * queue.avg_wait_slot
    }
    return res.json({ people_remaining, waiting_time })
  } catch (e) {
    console.log(e)
    return res.json('Something went wrong')
  }
}
module.exports = { registerUser, loginUser, viewUsers, joinQueue, checkPos }
