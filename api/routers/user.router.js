const express = require('express')
const passport = require('passport')
const router = express.Router()

const userController = require('../controllers/user.controller')

const {
  loginUser,
  registerUser,
  viewUsers,
  joinQueue,
  checkPos
} = userController

router.post('/signup', registerUser)
router.post('/signin', loginUser)
router.post(
  '/viewAll',
  viewUsers,
  passport.authenticate('jwt', { session: false })
)
router.post(
  '/joinQueue',
  joinQueue,
  passport.authenticate('jwt', { session: false })
)
router.post(
  '/checkPos',
  checkPos,
  passport.authenticate('jwt', { session: false })
)

module.exports = router
