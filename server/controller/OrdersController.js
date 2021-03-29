const OrderServices = require("../services/orderServices");

const OrdersController = {
  async all(req, res) {
    try {
      let getOrders = await OrderServices.getOrders();
      getOrders = getOrders.map(order => {
        return {
          "orderId": order.id,
          "employee": order.User.userName,
          "employeeId": order.User.id,
          "client": order.clientName,
          "table": order.table,
          "status": order.status,
          "createdAt": order.createdAt,
          "updatedAt": order.updatedAt,
          "products": order.orders.map(product => {
            return {
              "id": product.id,
              "name": product.name,
              "qtd": product.orderProductsQtd.qtd,
              "flavor": product.flavor,
              "complement": product.complement,
            }
          })
        }
      })
      res.status(201).json(getOrders);
      console.log(getOrders)
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  },

  async byId(req, res) {
    try {
      const orderId = req.params.orderId
      let getOrders = await OrderServices.getOrdersById(orderId);
      getOrders = {
        "orderId": getOrders.id,
        "employee": getOrders.User.userName,
        "employeeId": getOrders.User.id,
        "client": getOrders.clientName,
        "table": getOrders.table,
        "status": getOrders.status,
        "createdAt": getOrders.createdAt,
        "updatedAt": getOrders.updatedAt,
        "products": getOrders.orders.map(product => {
          return {
            "id": product.id,
            "name": product.name,
            "qtd": product.orderProductsQtd.qtd,
            "flavor": product.flavor,
            "complement": product.complement,
          }
        })
      }

      res.status(201).json(getOrders);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  },

  async create(req, res) {
    try {
      const createdOrder = await OrderServices.createOrder(req.body);
      let orderProducts = req.body.products;
      orderProducts = orderProducts.map(product => {
        return {
          'orderId': createdOrder.id,
          'productId': product.id,
          'qtd': product.qtd
        }
      })
      await OrderServices.createOrderProducts(orderProducts);
      res.status(201).json(req.body);
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
  },

  async destroy(req, res) {
    try {
      const orderId = req.params.orderId
      let order = await OrderServices.getOrdersById(orderId);

      if (order) {
        await OrderServices.destroyOrder(orderId);
      res.status(200).json({message: "Pedido deletado com sucesso"});
      } else {
        return res.json({
          message: "erro ao processar requisição"
        })
      }
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
  },

  async update(req, res) {
    try {
      const orderId = req.params.orderId
      const newStatus = req.body.status
      let order = await OrderServices.getOrdersById(orderId);

      if (order) {
        await OrderServices.updateOrder(orderId, newStatus);
      res.status(204).json({message: "pedido atualizado com sucesso"});
      } else {
        return res.json({
          message: "erro ao processar requisição"
        })
      }
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
  }
}

module.exports = OrdersController