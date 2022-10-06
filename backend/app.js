const express = require('express');
const app = express();

app.use(express.json());

//importar rutas
const products = require('./routes/productsRoute');


app.use("/api", products);

module.exports = app;