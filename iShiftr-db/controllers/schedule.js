const Schedule = require('../models/ScheduleModel');
const Employee = require('../models/EmployeeModel');
const Employer = require('../models/EmployerModel');

const createSchedule = (req, res) => {
    const { day, date, startTime, endTime } = req.body;
    const schedule = new Schedule(req.body);
    console.log(req.body.startTime);
    console.log(schedule);
    schedule
        .save()
        .then(newSched => {
            console.log('schedule ' , newSched);
            Employer
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
    console.log('ID: ', req.params.id);
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        
        Employer
            .findById(id)
            .sort({ _id: -1 })
            .populate('schedules')
            .then((employer) => {
                res.status(200).json(employer.schedules);
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

const deleteSchedule = (req, res) => {
    Schedule
        .findByIdAndRemove(req.params.id)
        .then((response) => {
            if(response) {
                res.status(200).json({ Message: 'Schedule successfully deleted!' });
            } else {
                res.status(404).json({Message:"Schedule does not exist"})
            }
        })
        .catch((error) => {
            res.status(500).json({ Error: 'There was an error deleting the Schedule', error })
        });
}

module.exports = {
    createSchedule,
    getSchedule,
    getEmpsSched,
    deleteSchedule
};