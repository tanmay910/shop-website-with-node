const express = require('express');
const path= require('path');
const router = express.Router();
 const rootdir= require('../utility/path');
const adminController=require('../controllers/admin');




router.get('/add-product',adminController.getAddproducts );

router.get('/products',adminController.getProducts);


router.post('/add-product',adminController.postAddproducts);

exports.routes = router;








