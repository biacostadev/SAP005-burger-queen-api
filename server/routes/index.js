const { Router } = require('express')
const Users = require("./Users")

const router = Router()

// aqui vai todas as rotas
router.use('/users', Users);


module.exports = router
