const jwt = require("jsonwebtoken");
const {
  Bearer
} = require("permit");

const model = require("../db/models");

const permit = new Bearer();

module.exports = {
  login(req, res, next) {
    // #swagger.tags = ['auth']
    // #swagger.description = 'Endpoint para gerar o token de autenticação com um usário já logado.'
    
    const {
      email,
      password
    } = req.body;

    model.Users.findOne({
      where: {
        email: email,
        password: password
      },
    }).then((user) => {
      if (!user) return res.status(401).json({
        error: "confirme suas informações e tente novamente"
      });

      let jwtPayload = {
        id: user.id
      };
      let token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

      return res.status(200).json({
        token
      });
    });
  },


  auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
      permit.fail(res);
      return res.status(401).json({
        error: "authentication required!"
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({
          error: "failed to authenticate token!"
        });
      }

      req.id = decoded.id;
      next();
    });
  },

};