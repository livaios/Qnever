const express = require('express')

const router = express.Router()

const userController = require('../controllers/user.controller')

const {} = userController

router.post('/signup')
router.post('/signin')

module.exports = router
