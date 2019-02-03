const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const configureRoutes = require('../config/routes.js');

//Create server
const server = express();

//Define middlewhere
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan());

//API Routes
configureRoutes(server);

module.exports = {
	server
};
