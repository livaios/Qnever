const express = require('express')

const router = express.Router()

const entityController = require('../controllers/entity.controller')

const {
  loginEntity,
  registerEntity,
  viewEntities,
  createQueue,
  viewQueue,
  deleteQueue,
  next
} = entityController

router.post('/signup', registerEntity)
router.post('/signin', loginEntity)
router.post('/viewAll', viewEntities)
router.post('/createQ', createQueue)
router.post('/viewMyQ', viewQueue)
router.post('/deleteQ', deleteQueue)
router.post('/next', next)
module.exports = router
