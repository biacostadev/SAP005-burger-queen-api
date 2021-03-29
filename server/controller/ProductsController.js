const models = require("../db/models");
const ProductsServices = require("../services/ProductsServices");

const all = async (req, res) => {
  try {
    const allProducts = await ProductsServices.getProducts()
    if (allProducts.length > 0) {
      res.status(200).json(allProducts)
    } else {
      res.status(400).json({
        message: "erro ao processar requisição"
      })
    }
  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

const byId = async (req, res) => {
  try {
    const productid = req.params.productid
    const productById = await ProductsServices.getProductsById(productid)
    res.status(200).json(productById)
  } catch (err) {
    console.log(err.message)
  }
}

const create = async (req, res) => {
  try {
    const newProductBody = {
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType
    }
    const newProduct = await ProductsServices.createProduct(newProductBody)
    res.status(201).json(newProduct)
  } catch (err) {
    res.status(400).json({
      message: 'erro ao criar produto',
    })
    console.log(err.message)
  }
};

const createMany = async (req, res) => {
  try {
    const newArray = req.body
    const newProduct = await ProductsServices.createManyProducts(newArray)
    res.status(201).json(newProduct)
  } catch (err) {
    res.status(400).json({
      message: 'erro ao criar produtos',
    })
    console.log(err.message)
  }
}

const update = async (req, res) => {
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
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(400).json({
      message: 'erro ao salvar ordem',
    })
    console.log(err.message)
  }
};

const destroy = async (req, res) => {
  try {
    const productId = req.params.productid
    await ProductsServices.destroyProduct(productId)
    res.status(200).json({
      message: 'produto excluído',
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