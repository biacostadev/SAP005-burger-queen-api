const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

router.get("/", ProductsController.all);
router.get('/:productid', ProductsController.byId);
router.post('/', ProductsController.create);
router.post('/many', ProductsController.createMany);
router.put('/:productid', ProductsController.update);
router.delete('/:productid', ProductsController.destroy);


module.exports = router