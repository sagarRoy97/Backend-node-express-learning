
const express = require('express');
/**
 * You need to install body-parser to parse the body of the incoming request. It is not a part of express. It is a separate package.
 * npm install --save body-parser
 */
const bodyParser = require('body-parser');
const app = express();
/**
 * body parser is needed to parse the body of the incoming request. putting it inside a middlewear means we are funneling every incoming request through this middlewear. Without this, we won't be able to parse the body of the incoming request --> body will be undefined
 */
app.use(bodyParser.urlencoded({extended: false}));

/**
 * urlencoded is a method of body-parser which is used to parse the incoming request with url encoded payloads. extended: false means that the values can be only strings or arrays
 */
app.use('/add-product',(req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
})

/**
 * req.resirect() is used to redirect the request to a different route
*/
app.use('/product',(req, res, next) => {
  console.log('req.body:',req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  console.log("In the root middleware");
  res.send("<h1>Hello from express, this is root route</h1>");
})

app.listen(8080, ()=> {console.log("server is running at port 8080")})