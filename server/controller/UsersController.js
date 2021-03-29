const models = require("../db/models");
const UsersServices = require("../services/UsersServices");


const all = async (req, res) => {
  try {
    const allUsers = await UsersServices.getUsers()
    if (allUsers.length > 0) {
      return res.status(200).json(allUsers)
    } else {
      return res.json({
        message: "erro ao processar requisição"
      })
    }
  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

const byId = async (req, res) => {
  try {
    const userId = req.params.userId
    const userById = await UsersServices.getUsersById(userId)
    res.status(200).json(userById)
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
}

const create = async (req, res) => {
  try {
    const newUserBody = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant
    }
    const newUser = await UsersServices.createUser(newUserBody)
    res.status(201).json({message: "usuário criado com sucesso"})
  } catch (err) {
    console.log(err.message)
  }
};

const update = async (req, res) => {
  try {
    const updateUser = await models.Users.update({
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
    res.status(200).json(updateUser)
  } catch (err) {
    console.log(err.message)
  }
};

const destroy = async (req, res) => {
  try {
    const userId = req.params.userId
    const destroyUser = await UsersServices.destroyUser(userId)

    res.status(200).json(destroyUser)
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