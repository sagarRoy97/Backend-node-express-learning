
const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

/**
 * There are two route in adminRouter, what if we want to add a prefix to all the routes in adminRouter, For this we can use extra router below
 * with adminRouter as a parameter. can do the same with shopRouter
 * Remember express autpmatically ommits it so that it does not cause problem  in ./routes/admin.js  and ./routes/shop.js file logic
 */

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});


app.listen(8080, ()=> {console.log("server is running at port 8080")})