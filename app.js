// node js core module imports
const http = require('http');

// third party module imports
const express = require('express');
const app = express();

/**
 * app.use() can be use for multipurpose, normally we use for misslewears, going through official documentation,
 * this middlewears can be used for: filtering different routes also. Now as we know that the incoming request
 * funnels through every middlewears put 'middlewear with root route' at last, because it gets executed in every route and
 * if we put it at first, it will get executed. check when you put next() method as it pass the request to next middlewear, cross check
 * if is sending response more than one time--> this should not happen
 */
/**
 * Middleware for the /add-product route.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
app.use('/',(req, res, next) => {
  console.log("runs everytime");
  // res.send("<h1>Hello from express, this is add-product route</h1>");
  next();
})

app.use('/add-product',(req, res, next) => {
  console.log("In the add-product middleware");
  res.send("<h1>Hello from express, this is add-product route</h1>");
  // next();
})
app.use('/',(req, res, next) => {
  console.log("In the root middleware");
  res.send("<h1>Hello from express, this is root route</h1>");
  // next();
})

// my logics
const server = http.createServer(app);
server.listen(8080, ()=> {console.log("server is running at port 8080")})

// app.listen(8080, ()=> {console.log("server is running at port 8080")})