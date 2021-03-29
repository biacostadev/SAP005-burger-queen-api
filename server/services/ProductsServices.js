const db = require('../db/models');

const ProductsServices = {
  async getProducts() {
    return await db.Products.findAll({
      raw: true
    })
  },

  async getProductsById(productid) {
    return await db.Products.findOne({
      raw: true,
      where: {
        id: productid
      }
    })
  },

  async createProduct(productData) {
    return await db.Products.create(productData);
  },

  async createManyProducts(productsData) {
    return await db.Products.bulkCreate(productsData);
  },

  // async updateUser(productId, newInfo) {
  //   return await db.Products.update({
  //     where: {
  //       id: productId
  //     }
  //   },
  //   {
  //     newInfo
  //   })
  // },

  async destroyProduct(productId) {
    return await db.Products.destroy({
      where: {
        id: productId
      }
    });
  },

}

module.exports = ProductsServices