# Backend-node-express-learning

## Using Middleware:
In Express JS, incoming requests funnel through multiple functions until they get resolved and a response is sent for the request. These functions are called middleware. In Express JS, instead of one big request-handler, we can hook multiple functions in one request to execute (like a plugin and execute functionality).

The middleware is written inside the `use` method of the `app` (express) object. We can only use middleware after we call the express function:

```javascript
// third party module imports
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("This is my first middleware");
    next(); // next is a function which will pass the request to the next middleware
});

app.use((req, res, next) => {
    console.log("This is my second middleware");
    next();
});
```

In the middleware, we have three parameters: `req`, `res`, and `next`. The `next` method is used to pass the incoming request to the next middleware; otherwise, we can stop it and send a response instead of passing it to the next middleware.
