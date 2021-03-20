const { Router } = require('express')
const Users = require("./Users")
const Auth = require("./Auth")


const router = Router()

// aqui vai todas as rotas
router.use('/users', Users);
router.use('/login', Auth);




module.exports = router
