const express = require('express');
const server = express();
const router = require('./src/routes/router');
const path = require('path');

const port = process.env.PORT || 3001;

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(express.static(path.join(__dirname, '/src/public/')));
server.set('views', path.join(__dirname, '/src/views'));
server.set('view engine', 'ejs');
server.use(router);

server.listen(port, () => {
    console.log('Server running on port ' + port);
});