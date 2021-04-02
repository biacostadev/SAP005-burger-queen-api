const OrderServices = require("../services/orderServices");

const OrdersController = {
  async all(req, res) {
    // #swagger.tags = ['orders']
    // #swagger.description = 'Endpoint para obter todos os pedidos cadastrados.'
    /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */
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
      if (!getOrders) return res.status(404).json({
        error: "pedidos não encontrados"
      });
      res.status(201).json(getOrders);
      console.log(getOrders)
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  },

  async byId(req, res) {
    // #swagger.tags = ['orders']
    // #swagger.description = 'Endpoint para obter um pedido específico.'
    /* #swagger.parameters['orderid'] = {
                   description: 'ID do pedido.',
                   type: 'string',
                   in: 'path'
            } */
    /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */
    try {
      const orderid = req.params.orderid
      let getOrders = await OrderServices.getOrdersById(orderid);
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
      if (!getOrders) return res.status(404).json({
        error: "pedido não encontrado"
      });
      res.status(201).json(getOrders);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  },

  async create(req, res) {
    // #swagger.tags = ['orders']
    // #swagger.description = 'Endpoint para criar um novo pedido.'
    /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */
    /* #swagger.parameters['novo pedido'] = {
               in: 'body',
               description: 'Informações do pedido.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Order" }
        } */
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
      res.status(201).json({
        message: "pedido criado com sucesso"
      });
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
  },

  async destroy(req, res) {
    // #swagger.tags = ['orders']
    // #swagger.description = 'Endpoint para excluir um pedido específico.'
    /* #swagger.parameters['orderid'] = {
                   description: 'ID do pedido.',
                   type: 'string',
                   in: 'path'
            } */
    /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */
    try {
      const orderid = req.params.orderid
      let order = await OrderServices.getOrdersById(orderid);

      if (order) {
        await OrderServices.destroyOrder(orderid);
        res.status(200).json({
          message: "Pedido deletado com sucesso"
        });
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
    // #swagger.tags = ['orders']
    // #swagger.description = 'Endpoint para editar um pedido específico.'
    /* #swagger.parameters['orderid'] = {
                   description: 'ID do pedido.',
                   type: 'string',
                   in: 'path'
            } */
    /* #swagger.parameters['token'] = {
                 description: 'Auth Token.',
                 type: 'string',
                 in: 'header'
          } */
    /* #swagger.parameters['editar um pedido'] = {
               in: 'body',
               description: 'Informação para atualização do status de um pedido.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/PatchOrder" }
        } */
    try {
      const orderid = req.params.orderid
      const newStatus = req.body.status
      let order = await OrderServices.getOrdersById(orderid);

      if (order) {
        await OrderServices.updateOrder(orderid, newStatus);
        res.status(204).json({
          message: "pedido atualizado com sucesso"
        });
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