# Backend-node-express-learning

## Installing Express JS:
Express JS can be installed with the following command:
```
npm install --save express
```

Here we are installing it as a production dependency as we need it in the application after deployment (production) to run the application. This will be an integral part of the application which will handle the requests and responses, parse the data, etc.

```javascript
// node js core module imports
const http = require('http');

// third party module imports
const express = require('express');
const app = express();

// my logics
const server = http.createServer(app);
server.listen(8080, () => {
    console.log("server is running at port 8080");
});
```

Here we are importing the Express JS third-party module, running it as a function, and saving whatever it returns in the `app` variable. If you see the Express JS package in the node module, this `express` is a function and possibly returns an object when it gets called. This `app` variable now has all the functionalities of handling requests, responses, and body parsing.

Express JS handles requests and responses in a particular and elegant manner. When we spin the server with this `app` variable, we get this type of request-response handler. For this, we have to pass the `app` variable inside the `createServer` method and put this in an event (request) listener.

