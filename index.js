require("dotenv").config();

const express = require('express');
// const cors = require('cors');
const routes = require('./server/routes/index');
const PORT = process.env.PORT || 3000;
const app = express();

// app.use(cors());
app.use(express.json());
app.use(routes);

// app.get('/', (req, res) => {
//   res.send({app: 'hello Bia!'})
// })

//error handling
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production")
    res.status(500).json({ error: "internal server error" });
  else return next(err);
});

app.listen(PORT);