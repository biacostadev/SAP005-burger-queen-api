const { Router } = require('express')
const UsersController = require('../controller/UsersController')
const router = Router()

// aqui vai as requisições
router.get("/", UsersController.all);
router.get('/:id', UsersController.byId);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.destroy);


module.exports = router