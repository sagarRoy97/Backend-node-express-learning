// node js core module imports
const http = require('http');

// third party module imports
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log("This is my first middleware");
    next(); // next is a function which will pass the request to the next middleware
});
app.use((req, res, next) => {
    console.log("This is my secend middleware");
    next();
});
// my logics
const server = http.createServer(app);
server.listen(8080, ()=> {console.log("server is running at port 8080")})

// app.listen(8080, ()=> {console.log("server is running at port 8080")})