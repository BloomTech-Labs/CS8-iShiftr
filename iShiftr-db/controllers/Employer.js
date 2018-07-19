const Employer       = require('../models/EmployerModel');

const createEmployer = (req, res) => {
    const employer   = new Employer({username, password, email, firstName, lastName, phoneNumber});
    employer
        .save((error, employer) => {
            if(error) {
                console.log("There was an error creating the user. PLease try again");
            }
            res.json(employer);
        });
;}

module.exports = {
    createEmployer
};