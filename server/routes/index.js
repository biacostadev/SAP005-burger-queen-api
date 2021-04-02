const { Router } = require('express')
const Auth = require("./Auth")
const Products = require("./Products")
const Orders = require("./Orders")

const router = Router()

router.use('/auth', Auth);
router.use('/products', Products);
router.use('/orders', Orders);

module.exports = router
