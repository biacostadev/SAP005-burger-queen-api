const db = require('../db/models');

const OrderServices = {
  async getOrders() {
    return await db.Orders.findAll({
      include: [{
          model: db.Products,
          as: 'orders',
          required: false,
          attributes: ['id', 'name', 'flavor', 'complement'],
          through: {
            model: db.ProductsOrders,
            as: 'orderProductsQtd',
            attributes: ['qtd']
          }
        },
        {
          model: db.Users,
          required: false,
          attributes: ['userName', 'id']
        }
      ]
    });
  },

  async getOrdersById(orderId) {
    return await db.Orders.findOne({
      where: {
        id: orderId
      },
      include: [{
          model: db.Products,
          as: 'orders',
          required: false,
          attributes: ['id', 'name', 'flavor', 'complement'],
          through: {
            model: db.ProductsOrders,
            as: 'orderProductsQtd',
            attributes: ['qtd']
          }
        },
        {
          model: db.Users,
          required: false,
          attributes: ['userName', 'id']
        }
      ]
    });
  },


  async getOrdersProducts() {
    return await db.ProductsOrders.findAll();
  },

  async createOrder(orderData) {
    return await db.Orders.create(orderData);
  },

  async createOrderProducts(orderProductsData) {
    return await db.ProductsOrders.bulkCreate(orderProductsData);
  },

  async destroyOrder(orderId) {
    return await db.Orders.destroy({
      where: {
        id: orderId
      },
      cascade:true
    });
  },

  async updateOrder(orderId, newStatus) {
    return await db.Orders.update({
      status: newStatus,
    }, {
      where: {
        id: orderId
      },
      cascade:true
    })
  },

}

module.exports = OrderServices