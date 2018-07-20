const { authenticate, isAdmin } = require("../utils/middleware");
const { employeeLogin }                 = require("../controllers/employeeLogin");
const { login }                 = require("../controllers/employerLogin");

const {
  createEmployer,
  editEmployerPassword
} = require("../controllers/Employer");

const {
  createEmployee,
  getEmployees,
  getOneEmployee,
  deleteEmployee,
  editEmployeePassword,
  editEmployee
} = require("../controllers/Employee");

const {
  createSchedule,
  getSchedule,
  getEmpsSched
} = require("../controllers/schedule");

module.exports = server => {
  server.route("/").post(createEmployer);
  server.route("/employeeLogin").post(employeeLogin);
  server.route("/employerLogin").post(login);
  server
    .route("/:id/createEmployee", authenticate, isAdmin)
    .post(createEmployee);
  // server.route("/editEmployee/:id", authenticate).put(editEmployee);
//   server
//     .route("deleteEmployeePassword/:id", authenticate)
//     .delete(deleteEmployeePassword);
};
