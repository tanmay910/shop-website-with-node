
const shopController=require('../controllers/shop')

const express = require('express');
const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/products',shopController.getproducts);

router.get('/products/:productId',shopController.getproducts);

// router.get('/cart',shopController.getCart);
// router.get('/checkout',shopController.getCheckout);
// router.get('/orders',shopController.getOrders);

module.exports = router;

