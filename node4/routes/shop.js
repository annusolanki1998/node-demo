const path = require("path");

const express = require("express");

const rootDir = require('../util/path'); 

const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products,
         pageTitle: 'Shop',
         path: '/',
         hasProduct: products.length > 0,
         activeShop: true,
         producysCSS: true
        });
    //console.log('shop.js' , adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //console.log("Intoo another middleware!");
    //res.send("<h1>Hello from Express!</h1>");


});

module.exports = router;
 


