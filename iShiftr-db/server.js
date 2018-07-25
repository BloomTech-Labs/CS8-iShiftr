const express     = require('express');
const cors        = require('cors');
const helmet      = require('helmet');
const morgan      = require('morgan');
const routes      = require('./routes/routes');
const server      = express();
const stripe      = require("stripe")("sk_test_TwTTlid3GeOG6YPydOjARw4I");

const corsOptions = {
    origin: 'https://ishiftr.netlify.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials: true
}

server.use(helmet());
server.use(cors(corsOptions));
server.use(require("body-parser").text());
server.use(express.json());
server.use(morgan('dev'));
routes(server);
module.exports    = server;