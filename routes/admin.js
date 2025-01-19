const path = require('path');

const express = require('express');


const router = express.Router();

/**
 * we can only use res.sendFile() to send HTML files, and it only takes absolute path as an argument.
 * so we can not use relative path("./views/shop.html") as an argument.
 * and "/views/shop.html" is not an absolute path. it needs OS level absolute path
 * So here we use node core modules path to get the absolute path of the file.
 * (path.join(__dirname)) fives the folder path of the current file 
 */

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})


router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;