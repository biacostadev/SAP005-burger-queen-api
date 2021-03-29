const models = require("../db/models");

const all = async (req, res) => {
  try {
    const allUsers = await models.Users.findAll({
      raw: true,
      attributes: {
        exclude: ['password']
      }
    })
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
    const userById = await models.Users.findAll({
      raw: true,
      where: {
        id: req.params.id
      },
      attributes: {
        exclude: ['password']
      }
    })
    if (userById.length > 0) {
      res.status(200).json(userById)
    } else {
      res.json({
        message: err.message
      })
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

const create = async (req, res) => {
  try {
    const newUser = await models.Users.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant
    })
    res.status(201).json(newUser)
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
        id: req.params.id
      }
    })
    res.status(200).json(updateUser)
  } catch (err) {
    console.log(err.message)
  }
};

const destroy = async (req, res) => {
  try {
    const destroyUser = await models.Users.destroy({
      where: {
        id: req.params.id
      }
    })
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