const { Router } = require('express')
const UserController = require('../controller/UsersController')
const router = Router()

router.get("/", UserController.all);
router.get('/:userId', UserController.byId);
router.post('/', UserController.create);
router.patch('/:userId', UserController.update);
router.delete('/:userId', UserController.destroy);

module.exports = router