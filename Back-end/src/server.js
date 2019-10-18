const express = require ('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes');

const app = express();

 
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-s6xyz.mongodb.net:27017,omnistack-shard-00-01-s6xyz.mongodb.net:27017,omnistack-shard-00-02-s6xyz.mongodb.net:27017/test?ssl=true&replicaSet=Omnistack-shard-0&authSource=admin&retryWrites=true&w=majority',{
     useNewUrlParser:true,
     useUnifiedTopology:true,
 })
//req.query acessar query params (para filtros)
//req.params = acessar route params(para ediçao, delete)
//req.body = acessar corpo da requisiçao, para criaçao, ediçao

//

app.listen(3333);