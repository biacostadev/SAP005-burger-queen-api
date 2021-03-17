// aqui vai o código que acessa o banco de dados
// const fs = require('fs');

let users = require('./users.json')

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

// const createNewUser = (req, res) => {
//   fs.readFile('./users.json', 'utf8', function(data){
//     const obj = JSON.parse(data);
//      req.body.uid = obj.users.length + 1;
 
//      obj.users.push(req.body);
     
//      res.json(response);
//   })

//   // const newUser = JSON.parse(users.usuarios.push({
//   //   "uid": "req.params.body.uid",
//   //   "username": "req.params.body.username",
//   //   "email": "req.params.body.email"  
//   // }))
//   // console.log(newUser)
//   // res.send(newUser);
// }

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser
}