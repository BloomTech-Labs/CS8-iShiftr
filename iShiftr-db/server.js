const express     = require('express');
const cors        = require('cors');
const helmet      = require('helmet');
const morgan      = require('morgan');
const routes      = require('./routes/routes');
const server      = express();

const corsOptions = {
    origin: ('https://ishiftr.netlify.com', 'http://localhost:3000'),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Origin','Content-Type', 'Authorization'],
    credentials: true
}

server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json());
server.use(morgan('dev'));
routes(server);
module.exports    = server;