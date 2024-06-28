const express = require('express');
const cors = require('cors');

require ('dotenv-safe').config();
const db = require('./database/mongoConfig');

const foodRouter = require('./routes/foodRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', foodRouter);

db.connect();
module.exports = app;