const { Router } = require('express')
const Users = require("./Users")
const Auth = require("./Auth")
const Products = require("./Products")
const Orders = require("./Orders")


const router = Router()

router.use('/users', Users);
router.use('/login', Auth);
router.use('/products', Products);
router.use('/order', Orders);

module.exports = router
