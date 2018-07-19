const jwt = require("jsonwebtoken");
const { mysecret } = require("../config");
const Employee = require("../models/EmployeeModel");

const employeeLogin = (req, res) => {
  const { username, password } = req.body;

  Employee.findOne({ username }, (error, employee) => {
    if (error) {
      return res.status(403).json({ error: "Invalid Username/Password" });
    }
    if (employee === null) {
      return res
        .status(422)
        .json({ error: "No Employee with that username was found." });
    }
    employee.checkPassword(password,
      (nonmatch, hashMatch) => {
        if (nonmatch != null) {
          return res.status(422).json({ error: "Invalid Password!" });
        }
        if (hashMatch) {
          const payload = {
            username: employee.username
          };
          const token = jwt.sign(payload, process.env.mysecret);
          let id = employee.id;
          console.log(id);
          res.status(200).json({ token, id });
        }
    });
  });
};

module.exports = {
  employeeLogin
};
