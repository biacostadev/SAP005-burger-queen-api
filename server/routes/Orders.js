const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

// // aqui vai as requisições
router.get("/", OrdersController.all);
router.get('/:orderId', OrdersController.byId);
router.post('/', OrdersController.create);
// router.put('/:id', OrdersController.update);
// router.delete('/:orderId', OrdersController.destroy);


module.exports = router