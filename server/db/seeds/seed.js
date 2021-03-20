require("dotenv").config();

const bcrypt = require("bcrypt");

const User = require("../models/UsersModel");

User.create({
  userName: "admin",
  password: bcrypt.hashSync("123", 10),
  email: "admin@teste.com",
  role: "admin",
  restaurant: "admin"
});

User.findAll().then((result) => {
  console.log(result);
});