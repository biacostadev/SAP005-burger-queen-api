const { Router } = require('express')
const UserController = require('../controller/UsersController')
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/", AuthController.auth, UserController.all);
router.get('/:userId', AuthController.auth, UserController.byId);
router.post('', UserController.create);
router.patch('/:userId', AuthController.auth, UserController.update);
router.delete('/:userId', AuthController.auth, UserController.destroy);

module.exports = router