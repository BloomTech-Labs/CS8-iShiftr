const jwt = require('jsonwebtoken');
const Employer = require('../models/EmployerModel');
const Employee = require('../models/EmployeeModel');
const { MY_SECRET } = require('../config');

const authenticate = (req, res, next) => {
    const token = req.get('Authorization');
    if(token) {
        jwt.verify(token, process.env.MY_SECRET, (error, decoded) => {
            if (err) {
                return res.status(422).json(error);
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).json({ error: 'No token provided, must be set on Authorization header'});
    }
}

const isAdmin = (req, res, next) => {
    if (req.decoded._doc.admin == true) {
        next();
    } else {
        //return an error if the user is not an admin
        res.status(403).json({ error: 'You are not authorized to perform this operation'});
    }
}

module.exports = {
    authenticate
};