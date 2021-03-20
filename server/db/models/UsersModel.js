const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const bcrypt = require("bcrypt");


const UserModel = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurant: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  hooks: {
    beforeCreate: UserModel => {
      const salt = bcrypt.genSaltSync();
      UserModel.set('password', bcrypt.hashSync(UserModel.password, salt));
    }
  }
}
);

//create table if not exists...
const init = async () => {
  await UserModel.sync();
};

init();

module.exports = UserModel;
