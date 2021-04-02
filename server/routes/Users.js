const { Router } = require('express')
const UserController = require('../controller/UsersController')
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/users", AuthController.auth, UserController.all);
router.get('/users/:userId', AuthController.auth, UserController.byId);
router.post('/users', UserController.create);
router.patch('/users/:userId', AuthController.auth, UserController.update);
router.delete('/users/:userId', AuthController.auth, UserController.destroy);

module.exports = router