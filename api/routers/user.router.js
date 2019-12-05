const express = require('express')

const router = express.Router()

const userController = require('../controllers/user.controller')

const { loginUser, registerUser, viewUsers, joinQueue } = userController

router.post('/signup', registerUser)
router.post('/signin', loginUser)
router.post('/viewAll', viewUsers)
router.post('/joinQueue', joinQueue)

module.exports = router
