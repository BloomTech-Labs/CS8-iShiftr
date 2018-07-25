const Schedule = require('../models/ScheduleModel');
const Employee = require('../models/EmployeeModel');
const Employer = require('../models/EmployerModel');

const createSchedule = (req, res) => {
    const { date, startTime, endTime, shiftLength } = req.body
    const schedule = new Schedule({ date, startTime, endTime, shiftLength });
    schedule
        .save()
        .then(newSched => {
            Employee
                .findByIdAndUpdate(req.params.id, {
                    $push: { schedules: newSched._id }
                })
                .then(schedule => {
                    console.log("response: ", schedule);
                    res.status(200).json({ Message: "schedule saved in the schedule collection" });
                })
                .catch(error => {
                    res.status(500).json({ error: "There was an error saving the schedule" });
                });
        })
        .catch(error=> {
            res.status(500).json({Error: "There was an error creating the schedule"})
        });
}

const getSchedule = (req, res) => {
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        Employee
            .findById(id)
            .sort({ _id: -1 })
            .populate('schedules')
            .then((schedule) => {
                console.log(schedule);
                res.status(200).json({ Schedule: schedule });
            })
            .catch((error) => {
                res.status(500).json({ Error: "Unable to get the schedule" })
            });
    } else {
        console.log("There was an error completing the request. Please include an Employee ID")
    }
}

const getEmpsSched = (req, res) => {
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        // Employer
        //     .findById(id)
        //     .then((employees) => {
        //         Employee
        //             .find
        //     })
        // let emps = Employer.employees.find().toArray();
        Employee
            .find({ "employer": req.params.id })
            .sort({ _id: -1 })
            .populate('schedules')
            .then((employees) => {
                res.status(200).json(employees)
            })
            .catch((error) => {
                res.status(500).json({ Error: error });
            });
    }
}

module.exports = {
    createSchedule,
    getSchedule,
    getEmpsSched
};