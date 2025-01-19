
const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRouter);
app.use(shopRouter);

/**
 * because incoming requests fumnnels through middlewears from top to bottom, we can handle requests with no routes/unmatched route/not specified route at the bottom because, if it has route
 * it would have been handled by any middlewear, if it doesn't have a route, it would be handled by the middleware at the bottom.
 */

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});


app.listen(8080, ()=> {console.log("server is running at port 8080")})