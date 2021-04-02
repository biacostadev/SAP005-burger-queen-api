const models = require("../db/models");
const UsersServices = require("../services/UsersServices");


const all = async (req, res) => {
  // #swagger.tags = ['users']
  // #swagger.description = 'Endpoint para obter todos os usuários cadastrados.'
  /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */

  try {
    const allUsers = await UsersServices.getUsers()
    if (!allUsers) return res.status(404).json({
      error: "usuários não encontrados"
    });
    return res.status(200).json(allUsers)
  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

const byId = async (req, res) => {
  // #swagger.tags = ['users']
  // #swagger.description = 'Endpoint para obter um usuário especídifo.'
  /* #swagger.parameters['userId'] = {
               description: 'ID do usuário.',
               type: 'string',
               in: 'path'
        } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */

  try {
    const userId = req.params.userId
    const userById = await UsersServices.getUsersById(userId)
    if (!userById) return res.status(404).json({
      error: "usuário não encontrado"
    });
    res.status(200).json(userById)
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
}

const create = async (req, res) => {
  // #swagger.tags = ['users']
  // #swagger.description = 'Endpoint para criar um novo usuário.'
  /* #swagger.parameters['novo usuário'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/NewUser" }
        } */

  try {
    const newUserBody = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant
    }
    const newUser = await UsersServices.createUser(newUserBody)
    res.status(201).json({
      message: "usuário criado com sucesso"
    })
  } catch (err) {
    console.log(err.message)
  }
};

const update = async (req, res) => {
  // #swagger.tags = ['users']
  // #swagger.description = 'Endpoint para editar qualquer informação de um usuário especídifo.'
  /* #swagger.parameters['userId'] = {
               description: 'ID do usuário.',
               type: 'string',
               in: 'path'
        } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    await models.Users.update({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant
    }, {
      where: {
        id: req.params.userId
      }
    })
    res.status(200).json({
      message: "usuário atualizado com sucesso!"
    })
  } catch (err) {
    console.log(err.message)
  }
};

const destroy = async (req, res) => {
  // #swagger.tags = ['users']
  // #swagger.description = 'Endpoint para excluir um usuário especídifo.'
  /* #swagger.parameters['userId'] = {
               description: 'ID do usuário.',
               type: 'string',
               in: 'path'
        } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    const userId = req.params.userId
    await UsersServices.destroyUser(userId)
    res.status(200).json({
      message: "usuário deletado com sucesso!"
    })
  } catch (err) {
    console.log(err.message)
  }
};

module.exports = {
  all,
  create,
  byId,
  update,
  destroy
}