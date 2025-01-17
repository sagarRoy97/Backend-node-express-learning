
const express = require('express');
/**
 * instead of putting all the routes in one file, we can separate them into different files, express makes it easier with its Router class
 * For this we have to make a separate folder named routes and put all the routes in different files. Go to those file to see the code
 */
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

/**
 * here to use the routes from different file we have to put those inside app.use() method in the main file(app.js)
 */

app.use(adminRouter);
app.use(shopRouter);

/**
 * here please remember to call them in orderly manner.
 * The root route ('/') is accessible in every route-middlewear if it is called before the other routes. one way to avoid it is to put it at the end of the file. and use specific method like router.get()/app.get() or app.post()/router.post() instead of app.use()/router.use()
 * 
 * app.use()/router.use() does not do exact check of routes but specific methods like app.get() or app.post() does exact check of the routes.
 * 
 * Here even if we put shopRouter before adminRouter, it will not cause any problem( openning '/add-product' will open that route not '/' route) because we have used specific methods like app.get() and app.post() in the route files. but we should follow the order because may be some time we don't use specific methods and use app.use() in the route files 
 */

app.listen(8080, ()=> {console.log("server is running at port 8080")})