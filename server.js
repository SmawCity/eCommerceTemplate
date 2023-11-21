const express = require('express');
const env = require('dotenv').config();
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
// Serve static files from the "frontend" directory
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('layout', './layouts/layout'); // not at views root

app.get('/', function (req, res) {
  res.render('index', { title: 'Home' });
});
app.get('/views/cart.ejs', function (req, res) {
  res.render('cart', { title: 'Cart' }); // Renders page2.ejs 
});
app.get('/views/productPage.ejs', function (req, res) {
  res.render('productPage', { title: 'Products' }); // Renders page2.ejs 
});

/* ***********************
 * Server Operations
 *************************/
const port = process.env.PORT || 5000;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});