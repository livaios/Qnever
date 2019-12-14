const express = require('express')

const passport = require('passport')
const router = express.Router()
const cache = require('../cache')
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
router.post(
  '/viewAll',
  cache(10),
  viewEntities,
  passport.authenticate('jwt', { session: true })
)
router.post(
  '/createQ',
  cache(10),
  createQueue,
  passport.authenticate('jwt', { session: true })
)
router.post(
  '/viewMyQ',
  cache(10),
  viewQueue,
  passport.authenticate('jwt', { session: true })
)
router.post(
  '/deleteQ',
  cache(10),
  deleteQueue,
  passport.authenticate('jwt', { session: true })
)
router.post('/next', next, passport.authenticate('jwt', { session: true }))
module.exports = router
