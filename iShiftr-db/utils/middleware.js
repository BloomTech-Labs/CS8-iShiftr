const jwt = require('jsonwebtoken');
const Employer = require('../models/EmployerModel');
const Employee = require('../models/EmployeeModel');
const { mysecret } = require('../config');

const authenticate = (req, res, next) => {
    const token = req.get('Authorization');
    if(token) {
        jwt.verify(token, process.env.mysecret, (error, decoded) => {
            if (err) {
                return res.status(422).json(error);
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).json({ error: 'No token provided, must be set on Authorization header'})
    }
}

module.exports = {
    authenticate
};