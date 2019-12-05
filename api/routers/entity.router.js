const express = require('express')

const router = express.Router()

const entityController = require('../controllers/entity.controller')

const {
  loginEntity,
  registerEntity,
  viewEntities,
  createQueue,
  viewQueue,
  deleteQueue
} = entityController

router.post('/signup', registerEntity)
router.post('/signin', loginEntity)
router.post('/viewAll', viewEntities)
router.post('/createQ', createQueue)
router.post('/viewMyQ', viewQueue)
router.post('/deleteQ', deleteQueue)
module.exports = router
