require("dotenv").config();
var cors = require('cors')
const express = require('express');
const routes = require('./server/routes/index');
const PORT = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(PORT);