const router = require('express').Router()
const UserController = require('./controllers/UserController')
const Controller = require('./controllers/Controller')

router.use('/users', UserController)
router.use('/posts', Controller)

module.exports = router