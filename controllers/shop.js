const Product = require('../models/product');


exports.getproducts = (req, res, next) => {
Product.fetchAll().then((products) => {
    res.render('shop/product-list', { prods: products, pageTitle: 'All Products', path: '/products' });
  }).catch((err) => {
    console.log(err);
  });
};




exports.getIndex = (req, res, next) => {
  Product.fetchAll().then((products)=>{
    res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/' });
  }).catch(()=>{
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', { path: '/cart', pageTitle: 'Your Cart' });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: 'Checkout'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('/shop/orders', { pageTitle: 'Your Orders', path: '/orders' })

};

