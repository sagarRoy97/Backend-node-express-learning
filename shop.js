const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("In the root middleware");
    res.send("<h1>Hello from express, this is root route</h1>");
})

module.exports = router;