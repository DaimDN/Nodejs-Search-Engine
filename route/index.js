const express = require('express');
const Router = express.Router();


const {
    domainList,
    Landing,
    getData


} = require('./Routers');


const fs = require('fs');

Router.get('/', Landing )
Router.get('/api/domains', domainList );

Router.get('/api/v1', getData);



module.exports = Router;