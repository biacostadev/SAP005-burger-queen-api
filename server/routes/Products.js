const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/", AuthController.auth, ProductsController.all);
router.get('/:productid', AuthController.auth, ProductsController.byId);
router.post('/', AuthController.auth, ProductsController.create);
router.post('/many', AuthController.auth, ProductsController.createMany);
router.patch('/:productid', AuthController.auth, ProductsController.update);
router.delete('/:productid', AuthController.auth, ProductsController.destroy);


module.exports = router