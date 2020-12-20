const express = require('express');
const app = express();
const Routers = require('./route/index');


app.use('/', Routers );



module.exports = app;