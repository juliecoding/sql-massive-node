const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./products_controller')
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.get('/api/products', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.put('/api/product/:id', controller.update);
app.post('/api/product', controller.create);
app.delete('/api/product/:id', controller.delete);

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
