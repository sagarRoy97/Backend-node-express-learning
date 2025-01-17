
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product',(req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
})

/**
 * we can use app.use() to handle everything(all types of requests like get, post, put, delete etc). but if you you want to filter request based on their type you have to filter it using the specific method like get, post, put, delete etc.
*/

/**
 * here if we use app.get we will not get the req.body logged as it only works for post request. so to get the req.body logged we have to use app.post
*/
app.post('/product',(req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  console.log("In the root middleware");
  res.send("<h1>Hello from express, this is root route</h1>");
})

app.listen(8080, ()=> {console.log("server is running at port 8080")})