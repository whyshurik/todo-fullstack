const Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')
const AuthController = require("../controllers/auth.controller");

router.post('/login', AuthController.login)

router.post('/register', AuthController.register);


module.exports = router