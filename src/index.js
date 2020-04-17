require('./conexion/conecctionMongo');

const  cors= require('cors');

const express =  require('express');
const app  = express();
const body_parse = require('body-parser');
const morgan  = require('morgan');
const  rutas = require ('./Router/router');

app.use(cors());

app.use(body_parse.urlencoded({extended:true}));
app.use(body_parse.json());

app.use(rutas);

app.use(morgan('dev'));

var port  = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('conectado a puerto',port );

})