const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

router.get("/", OrdersController.all);
router.get('/:orderId', OrdersController.byId);
router.post('/', OrdersController.create);
router.patch('/:orderId', OrdersController.update);
router.delete('/:orderId', OrdersController.destroy);


module.exports = router