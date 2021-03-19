// aqui vai o código que acessa o banco de dados
// const fs = require('fs');

let users = require('./users.json')

const dataUser = []

const getAllUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send(users)
}

const getUserById = (req, res) => {
  let id = users.usuarios.filter(function(val){
    console.log(val.uid, req.params.uid)
    return val.uid === Number(req.params.uid);
  });
  res.send(id);
}

const createNewUser = (req, res) =>{
  if(!req.body.username || !req.body.email){
    res.status(400).send({message: "insufficient registration information"})
  }else{
    dataUser.push(req.body)
     res.status(201).send(dataUser)
     console.log(dataUser)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser
}