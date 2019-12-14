const express = require('express')

const passport = require('passport')
const router = express.Router()

const entityController = require('../controllers/entity.controller')

const {
  loginEntity,
  registerEntity,
  viewEntities,
  createQueue,
  viewQueue,
  deleteQueue,
  viewAllQueues,
  next
} = entityController

router.post('/signup', registerEntity)
router.post('/signin', loginEntity)
router.post(
  '/viewAll',
  viewEntities,
  passport.authenticate('jwt', { session: true })
)
router.post(
  '/createQ',
  createQueue,
  passport.authenticate('jwt', { session: true })
)
router.post(
  '/viewMyQ',
  viewQueue,
  passport.authenticate('jwt', { session: true })
)
router.post( 
  '/deleteQ',
  deleteQueue,
  passport.authenticate('jwt', { session: true })
)
router.post('/viewAllQueues',viewAllQueues,  passport.authenticate('jwt', { session: true }))

router.post('/next', next, passport.authenticate('jwt', { session: true }))
module.exports = router
