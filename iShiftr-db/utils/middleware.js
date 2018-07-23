const jwt = require('jsonwebtoken');
const Employer = require('../models/EmployerModel');
const Employee = require('../models/EmployeeModel');
const { MY_SECRET } = require('../config');

mysecret = 'authentication isnt working';

const authenticate = (req, res, next) => {
    const token = req.get('Authorization');
    console.log(token);
    if (token) {
      jwt.verify(token, mysecret, (err, decoded) => {
        if (err) return res.status(422).json(err);
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
    }
  };

const isAdmin = (req, res, next) => {
    if (req.decoded._doc.admin == true) {
        next();
    } else {
        //return an error if the user is not an admin
        res.status(403).json({ error: 'You are not authorized to perform this operation'});
    }
};

module.exports = {
    authenticate,
    isAdmin
};