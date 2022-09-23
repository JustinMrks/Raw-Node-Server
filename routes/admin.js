const express = require('express');

const Router = express.Router();

Router.get('/add-product', (req, res, next) => {
  res.send();
});

Router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = Router;
