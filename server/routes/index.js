const { Router } = require('express')
const Users = require("./Users")
// const Auth = require("./Auth")
const Products = require("./Products")
const Product = require("./Product")
const Orders = require("./Orders")





const router = Router()

// aqui vai todas as rotas
router.use('/users', Users);
// router.use('/login', Auth);
router.use('/products', Products);
router.use('/product', Product);
router.use('/order', Orders);

module.exports = router
