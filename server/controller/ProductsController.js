const models = require("../db/models");

const all = async (req, res) => {
  try {
    const allProducts = await models.Products.findAll({
      raw: true,
    })
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
    const productById = await models.Products.findAll({
      raw: true,
      where: {
        id: req.params.id
      }
    })
    if (productById.length > 0) {
      res.status(200).json(productById)
    } else {
      res.status(400).json({
        message: "erro ao processar requisição"
      })
    }
  } catch (err) {
    console.log(err.message)
  }
}

const create = async (req, res) => {
  try {
    const newProduct = await models.Products.create({
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType
    })
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
    const newProduct = await models.Products.bulkCreate(newArray)
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
    await models.Products.destroy({
      where: {
        id: req.params.id
      }
    })
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