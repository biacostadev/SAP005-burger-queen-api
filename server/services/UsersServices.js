const db = require('../db/models');

const UsersServices = {
  async getUsers() {
    return await db.Users.findAll({
      raw: true,
      attributes: {
        exclude: ['password']
      }
    })
  },

  async getUsersById(userId) {
    return await db.Users.findOne({
      raw: true,
      where: {
        id: userId
      },
      attributes: {
        exclude: ['password']
      }
    })
  },

  async createUser(userData) {
    return await db.Users.create(userData);
  },

  // async updateUser(userId, newInfo) {
  //   return await db.Users.update({
  //     where: {
  //       id: userId
  //     }
  //   },
  //   {
  //     newInfo
  //   })
  // },

  async destroyUser(userId) {
    return await db.Users.destroy({
      where: {
        id: userId
      }
    });
  },

}

module.exports = UsersServices