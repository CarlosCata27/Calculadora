
const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

__dirname = 'C:/Users/Carlos/Documents/GitHub/Calculadora/src/'

const holamundo = require('./routes/ping');
app.use('/',holamundo); 

const suma = require('./routes/Suma');
app.use('/suma',suma);

const resta = require('./routes/Resta');
app.use('/resta',resta);

const multiplicacion = require('./routes/Multiplicacion');
app.use('/multiplicacion',multiplicacion);

const division = require('./routes/Division');
app.use('/division',division);

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});