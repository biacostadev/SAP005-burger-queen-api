const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./server/routes/index.js']

const doc = {
  info: {
    version: "1.0.0",
    title: "Burger Hunger API",
    description: "API desenvolvida para aplicação web da hamburgueria Burger Hunger. Para utilizar qualquer endpoint você percisará de um token, que pode ser gerado no endpoint /login com o e-mail l@l.com e a senha '123456",
    contact: {
      "email": "anabeatrizcosta.o@gmail.com",
      "url": "https://github.com/biacostadev"
    }
  },
  host: "https://testando-db.herokuapp.com/",
  basePath: "/",
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [{
      "name": "auth",
      "description": "Gera um token"
    },
    {
      "name": "users",
      "description": "Operações com usuários"
    },
    {
      "name": "products",
      "description": "Operações com produtos"
    },
    {
      "name": "orders",
      "description": "Operações com pedidos"
    }
  ],
  definitions: {
    Order: {
      userId: 1,
      clientName: "Marie",
      table: 2,
      status: "Pending",
      products: [{
        id: 10,
        qtd: 1
      }]
    },
    NewUser: {
      userName: "Joana",
      password: 123456,
      email: "j@j.com",
      role: "Garçonete",
      restaurant: "Burger Hunger"
    },
    NewProduct: {
      name: "Hambúrguer simples",
      price: 15,
      flavor: "vegetariano",
      complement: "ovo",
      type: "all-day",
      subType: "hamburguer"
    },
    NewManyProducts: [{
      name: "Hambúrguer simples",
      price: 15,
      flavor: "vegetariano",
      complement: "ovo",
      type: "all-day",
      subType: "hamburguer"
    },
    {
      name: "Hambúrguer duplo",
      price: 17,
      flavor: "frango",
      complement: "queijo",
      type: "all-day",
      subType: "hamburguer"
    }],
    PatchOrder: {
      status: "em preparo"
    },
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js')
})