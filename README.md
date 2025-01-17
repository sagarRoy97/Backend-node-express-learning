# Backend-node-express-learning

## How middlewear works

If you don’t pass the request to the next middleware, send a response for that request; otherwise, that request would die.
To send a response, we can use `res.write()` and to set its header we can use `res.setHeader()`. But there are better options like `res.send()` which takes a parameter of any type. We can literally send anything including HTML. Also, this by default sets headers to `text/html`, but you can set your own custom header with `res.setHeader()` before it.
