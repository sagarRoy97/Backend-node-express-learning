// node js core module imports
const http = require('http');

// third party module imports
const express = require('express');
const app = express();
// my logics
const server = http.createServer(app);
server.listen(8080, ()=> {console.log("server is running at port 8080")})

// app.listen(8080, ()=> {console.log("server is running at port 8080")})