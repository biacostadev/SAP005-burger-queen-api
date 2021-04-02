const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/", AuthController.auth, OrdersController.all);
router.get('/:orderid', AuthController.auth, OrdersController.byId);
router.post('/', AuthController.auth, OrdersController.create);
router.patch('/:orderid', AuthController.auth, OrdersController.update);
router.delete('/:orderid', AuthController.auth, OrdersController.destroy);


module.exports = router