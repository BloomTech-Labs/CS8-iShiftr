const { authenticate, isAdmin } = require("../utils/middleware");
const { employeeLogin } = require("../controllers/employeeLogin");
const { login } = require("../controllers/employerLogin");

const {
  createEmployer,
  editEmployerPassword
} = require("../controllers/Employer");

const {
  createEmployee,
  getEmployees,
  getOneEmployee,
  deleteEmployee,
  editEmployeePassword
} = require("../controllers/Employee");

const {
  createSchedule,
  getSchedule,
  getEmpsSched
} = require("../controllers/schedule");

module.exports = server => {
  //create and login employer
  server.route("/api/register").post(createEmployer);
  server.route("/api/employerLogin").post(login);

  // server.route("/api/:id/schedule").get(authenticate, isAdmin, getEmpsSched);
  // server.route("/api/:id/employees").get(authenticate, isAdmin, getEmployees);

  //creating/editing/deleting an employee and employee login
  server.route("/api/:id/createEmployee").post(authenticate, isAdmin, createEmployee);
  server.route("/api/employeeLogin").post(employeeLogin);
  // server.route("/api/:id/editEmployee").get(authenticate, isAdmin, editEmployee);
  // server.route("/api/:id/deleteEmployee").delete(authenticate, isAdmin, deleteEmployee);

  // server.route("/editEmployee/:id", authenticate).put(editEmployee);
  //   server
  //     .route("deleteEmployeePassword/:id", authenticate)
  //     .delete(deleteEmployeePassword);
};
