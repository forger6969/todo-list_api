const express = require('express')
const taskRoutes = require('./routes/routes')
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api' , taskRoutes)
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

module.exports = app;