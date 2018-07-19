const Employee = require('../models/EmployeeModel');
const Employer = require('../models.EmployerModel');

const createEmployee = (req, res) => {
    const employee = new Employee({username, password, email, firstName, lastName, phoneNumber, availability, workHours});
    employee
        .save((error, employee) => {
            if(error) {
                console.log("There was an error creating the user. Please try again");
            }
            res.json(employee);
        });
    ;}

const deleteEmployee = (req, res) => {
    Employee
        .findByIdAndRemove(req.params.id)
        .then( (response) => {
            res.status(200).json({ Message: 'Employee successfully deleted!' });
        })
        .catch( (error) => {
            res.status(500).json({ Error: 'There was an error deleting the Employee', error })
        });
};

const editEmployeePassword = (req, res) => {
    const { _id, username} = req.employer;
    const { currentPassword, newPassword } = req.body;
    if(!currentPassword || !newPassword) {
        re.status(422).json({ Message: 'Please enter both current and new passwords'})
    }
    let opts = {
        new: true
    }
    Employer
        .finByIdAndUpdate(
            req.params.id,
            { password },
            opts
        )
        .then(updatedPass => {
            res.status(200).json(updatedPass);
        })
        .catch(error => {
            res.status(500).json({ Message: 'There was and error updating the password', error });
        });
};



module.exports = {
    createEmployee,
    deleteEmployee,
    editEmployee,
};