const app = require('../server');
const chalk = require('chalk');
const config = require('config');

const http = require('http');
const { type } = require('os');
const { EACCES, EADDRINUSE } = require('constants');
const server = http.createServer(app);
let port = process.env.PORT || config.get('PORT');
server.listen(port);

server.on('listening', function(){
    let address = server.address();
    let uri = typeof address === 'string' ? address : `http://localhost:${address.port}`;
    console.log(chalk.bgRed("listening on" + uri)) 
})
server.on('error', function(error){

    if(error.syscall !== 'listen'){
        throw error;
    }

    let bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;
    switch(error.code){
        case 'EACESS':
            console.log("Access denied");
            process.exit(1);

            break;

        case 'EADDRINUSE':
            console.log("Address already in use");
            process.exit(1);
            break

            default: throw error;
    }
})