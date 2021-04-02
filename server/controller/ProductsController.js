const models = require("../db/models");
const ProductsServices = require("../services/ProductsServices");

const all = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para obter todos os produtos cadastrados.'
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    const allProducts = await ProductsServices.getProducts()
    if (!allProducts) return res.status(404).json({
      error: "produtos não encontrados"
    });
    res.status(200).json(allProducts)
  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

const byId = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para obter um produto específico.'
  /* #swagger.parameters['productid'] = {
                 description: 'ID do produto.',
                 type: 'string',
                 in: 'path'
          } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    const productid = req.params.productid
    const productById = await ProductsServices.getProductsById(productid)
    if (!productById) return res.status(404).json({
      error: "produto não encontrado"
    });
    res.status(200).json(productById)
  } catch (err) {
    console.log(err.message)
  }
}

const create = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para criar um novo produto.'
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  /* #swagger.parameters['novo produto'] = {
         in: 'body',
         description: 'Informações do produto.',
         required: true,
         type: 'object',
         schema: { $ref: "#/definitions/NewProduct" }
  } */

  try {
    const newProductBody = {
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType
    }
    await ProductsServices.createProduct(newProductBody)
    res.status(201).json({
      message: "produto criado com sucesso"
    })
  } catch (err) {
    res.status(400).json({
      message: 'erro ao criar produto',
    })
    console.log(err.message)
  }
};

const createMany = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para criar vários produtos de uma vez.'
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  /* #swagger.parameters['novos produtos'] = {
         in: 'body',
         description: 'Informações dos produtos.',
         required: true,
         type: 'object',
         schema: { $ref: "#/definitions/NewManyProducts" }
  } */
  try {
    const newArray = req.body
    await ProductsServices.createManyProducts(newArray)
    res.status(201).json({
      message: "produtos criados com sucesso"
    })
  } catch (err) {
    res.status(400).json({
      message: 'erro ao criar produtos',
    })
    console.log(err.message)
  }
}

const update = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para editar um produto específico.'
  /* #swagger.parameters['productid'] = {
                 description: 'ID do produto.',
                 type: 'string',
                 in: 'path'
          } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    const updateUser = await models.Products.update({
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType
    }, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({
      message: "produto atualizado com sucesso"
    })
  } catch (err) {
    res.status(400).json({
      message: 'erro ao salvar produto',
    })
    console.log(err.message)
  }
};

const destroy = async (req, res) => {
  // #swagger.tags = ['products']
  // #swagger.description = 'Endpoint para excluir um produto específico.'
  /* #swagger.parameters['productid'] = {
                 description: 'ID do produto.',
                 type: 'string',
                 in: 'path'
          } */
  /* #swagger.parameters['token'] = {
               description: 'Auth Token.',
               type: 'string',
               in: 'header'
        } */
  try {
    const productId = req.params.productid
    await ProductsServices.destroyProduct(productId)
    res.status(200).json({
      message: "produto excluído com sucesso"
    })
  } catch (err) {
    res.status(400).json({
      message: 'erro ao excluir produto',
    })
    console.log(err.message)
  }
};

module.exports = {
  all,
  create,
  createMany,
  byId,
  update,
  destroy
}