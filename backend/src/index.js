const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-xx6zq.mongodb.net:27017,cluster0-shard-00-01-xx6zq.mongodb.net:27017,cluster0-shard-00-02-xx6zq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * Tipos de parametros:
 * Query Params: request.query (Filtros, ordenação, paginação e etc...)
 * Route Params: request.paramans (Identificar um recurso na alteração ou na remoção)
 * Body: request.body (Dados para criação ou alteração de um registro)
 */

app.use(express.json());
app.use(routes);

app.listen(3333);
