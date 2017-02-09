var app = require('./index.js')
var db = app.get('db');

module.exports = {
  create: function(req, res) {
    db.create_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      else {
        res.send(results);
      }
    })
  },
  getAll: function(req, res) {
    db.read_products([], function(err, results){
      if (err) {
        console.error(err);
        return res.send(err);
      }
      else {
        res.send(results);
      }
    })
  },
  getOne: function(req, res) {
    db.read_product([req.params.id], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      else {
        res.send(results);
      }
    })
  },
  update: function(req, res) {
    db.update_product([
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      else {
        res.send(results);
      }
    })
  },
  delete: function(req, res) {
    db.delete_product([
      req.params.id
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      else {
        res.send('Product ' + req.params.id + ' has been deleted');
      }
    })
  }
}
