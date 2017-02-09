// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://localhost/DevMtn-proj'

var massiveInstance = massive.connectSync({connectionString : connectionString})

// CONFIG
// ============================================================
// var config = require('./config');

// INITIALIZE APP
// ============================================================
var app = module.exports = express();

// INITIALIZE DEPENDENCIES
// ============================================================
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

// MASSIVE SETUP
// ============================================================

app.set('db', massiveInstance)
var db = app.get('db');

// CONTROLLERS
// ============================================================
var productsCtrl = require('./productsCtrl');

// ENDPOINTS
// ============================================================
// TABLE ENDPOINTS
app.post('/api/products', productsCtrl.create);
app.get('/api/products', productsCtrl.getAll);
app.get('/api/products/:id', productsCtrl.getOne);
app.put('/api/products/:id', productsCtrl.update);
app.delete('/api/products/:id', productsCtrl.delete);


// LISTEN
// ============================================================
var port = 3000;
app.listen(port, function() {
  console.log('listening on port ', port);
});
