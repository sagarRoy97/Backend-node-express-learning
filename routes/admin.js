
const express = require('express');


const router = express.Router();

/**
 * express automatically omits the /admin prefix from the routes in the admin.js file
 * but here  we are sending a request(post request) /product path we have to write to total/consolidated route i.e. /admin/product that we see in the browser after baseURL.
 */

router.get('/add-product', (req, res, next) => {
    res.send("<form action='admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
})


router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;