// aqui vai o código que acessa o banco de dados

const bcrypt = require("bcrypt");

const UserModel = require("../db/models/UsersModel");

module.exports = {
  all(req, res, next) {
    UserModel.findAll({
        attributes: {
          exclude: ['password']
        }
      })
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  byId(req, res, next) {
    UserModel.findAll({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ['password']
        }
      })
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const {
      userName,
      password,
      email,
      role,
      restaurant
    } = req.body;

    UserModel.create({
        userName,
        password,
        email,
        role,
        restaurant
      })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },

  update(req, res, next) {
    UserModel.update({ userName: req.body.userName }, {
      where: {
        id: req.params.id
      }
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },

  destroy(req, res, next) {
    UserModel.destroy({
        where: {
          id: req.params.id
        }
      })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  }


};