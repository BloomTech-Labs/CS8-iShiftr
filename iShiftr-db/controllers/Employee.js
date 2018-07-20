const Employee = require('../models/EmployeeModel');
const Employer = require('../models/EmployerModel');

const createEmployee = (req, res) => {
    const {username, password, email, firstName, lastName, phoneNumber, availability, workHours} = req.body;
    const employee = new Employee({username, password, email, firstName, lastName, phoneNumber, availability, workHours});
    employee
        .save((error, employee) => {
            if (error) {
                console.log("There was an error creating the user. Please try again");
            }
            res.json(employee);
        });
}

const getEmployees = (req, res) => {
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        Employer
            .findById(id)
            .select(-password)
            .populate('employees')
            .then(employer => {
                res.status(200).json({ Employees: employer.employees })
            })
            .catch((error) => {
                res.status(500).json({ Error: 'There was an error', error })
            })
    }
}

const getOneEmployee = (req, res) => {
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        Employee
            .findById(id)
            .select(-password)
            .then(employee => {
                res.status(200).json({ employee })
            })
            .catch((error) => {
                res.status(500).json({ Error: 'There was an error getting the employee', error })
            })
    }
}

const deleteEmployee = (req, res) => {
    Employee
        .findByIdAndRemove(req.params.id)
        .then((response) => {
            res.status(200).json({ Message: 'Employee successfully deleted!' });
        })
        .catch((error) => {
            res.status(500).json({ Error: 'There was an error deleting the Employee', error })
        });
};

const editEmployeePassword = (req, res) => {
    const { _id, username } = req.employee;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        re.status(422).json({ Message: 'Please enter both current and new passwords' })
    }
    const payload = {
        username: employee.username
    };
    const options = {
        expiresIn: 1000 * 60 * 60 * 24, // 24 hour expiration.
    };
    const token = jwt.sign(payload, process.env.MY_SECRET, options);
    // let opts = {
    //     new: true
    // }
    Employee
        .findById(_id)
        .then((employee) => {
            employee.checkPassword(currentPassword, (error, isValid) => {
                if (error) {
                    return res.status(500).json(error);
                }
                if (isValid) {
                    employee.password = newPassword;
                    Employee
                        .save()
                        .then((response) => {
                            const temp = { ...response._doc }
                            delete temp.password;
                            res.json({ token, employee: temp });
                        })
                        .catch((error) => {
                            res.status(501).json(error);
                        })
                } else {
                    res.status(403).json({ Message: 'Unauthorized. Unable to change password', error })
                }
            });
        })
        .catch(error => {
            res.status(500).json({ error: 'There was and error updating the password', error });
        });
};

const editEmployee = (req, res) => {
    const { username, password } = req.body;
  
    if (username !== undefined) {
      return res
        .status(400)
        .json({ errorMessage: "Username can not be changed!" });
    }
  
    if (password !== undefined) {
      return res
        .status(400)
        .json({ errorMessage: "Password can not be changed here!" });
    }
  
    Employee.findByIdAndUpdate(req.params.id, req.body)
      .then(employeeUpdated => {
        if (employeeUpdated === null) {
          res.status(404).json({ error: "Employee could not be updated!" });
        } else {
          User.findById(employeeUpdated.id)
  
            .then(updatedEmployee => {
              res.status(200).json(updatedEmployee);
            })
            .catch(err => {
              if (config.env === "development") {
                return res.status(500).json(err);
              } else {
                return res.status(500).json({
                  errorMessage: "Encountered an update error problem!"
                });
              }
            });
        }
      })
      .catch(err => {
        if (config.env === "development") {
          return res.status(500).json(err);
        } else {
          return res.status(500).json({
            errorMessage: "Encountered an update error problem!"
          });
        }
      });
  };

module.exports = {
    createEmployee,
    getEmployees,
    getOneEmployee,
    deleteEmployee,
    editEmployeePassword,
    editEmployee 
};