const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

// // aqui vai as requisições
// router.get("/", ProductsController.all);
// router.get('/:id', ProductsController.byId);
router.post('/', ProductsController.createMany);
// router.put('/:id', ProductsController.update);
// router.delete('/:id', ProductsController.destroy);


module.exports = router