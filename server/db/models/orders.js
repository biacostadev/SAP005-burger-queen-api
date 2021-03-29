'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // define association here
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'orders',
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
        hooks: true
      });
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
    }
  };
  Orders.init({
    clientName: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};