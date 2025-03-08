require('dotenv').config();
require('./db/connect');
const express = require('express');
const app = express();
const cors = require('cors');
const hpp = require('hpp');
const path = require('path');
const helmet = require('helmet');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const localeMiddleware = require('./middlewares/locale');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerWEbJsDocs = YAML.load(path.resolve(__dirname, '../openapi.yaml'));

app.get('/', (req, res) => {
  res.send('A2Y-API');
});

app.use('/api-docs', swaggerUI.serveFiles(swaggerWEbJsDocs), swaggerUI.setup(swaggerWEbJsDocs));
app.use(express.json());
app.use(localeMiddleware);
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
