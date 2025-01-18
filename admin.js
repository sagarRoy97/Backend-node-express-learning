/**
 * We can import express at multiple files in a project
 */
const express = require('express');

/**
 * router is like a mini-express app, it has all the methods that express app has.
 * We can use this almost same as app object in app.js.
 * The only difference is that we have to export the router object at the end of the file.
 * Then we have to import it again in app.js and use it there in app.use() method.
 */
const router = express.Router();

/**
 * using same logic as in app.js, just using router.get() instead of app.get()
 */
router.get('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
})

/**
 * using same logic as in app.js, just using router.post() instead of app.post()
 */
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;