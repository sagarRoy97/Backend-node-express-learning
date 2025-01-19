const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');


const router = express.Router();

/**
 * we got the rootDirectory from the path.js file, so don't need to use __dirname and going top level directory.
 */
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})


router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;