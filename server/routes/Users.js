const { Router } = require('express')
const UserController = require('../controller/UsersController')
const router = Router()

// aqui vai as requisições
router.get("/", UserController.all);
router.get('/:id', UserController.byId);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router