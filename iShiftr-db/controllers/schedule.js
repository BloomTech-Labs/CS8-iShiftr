const Schedule = require('../models/Schedule');

const createSchedule = (req, res) => {
    const schedule   = new Schedule({monday, tuesday, wednesday, thursday, friday, saturday, sunday});
    schedule
        .save((error, schedule) => {
            if(error) {
                console.log("There was an error creating a schedule. Please try again");
            }
            res.json(schedule);
        });
;}

const getSchedule = (req, res) => {
    if (req.params.id || _id) {
        const id = req.params.id || _id;
        Schedule
            .findById(id)
            .populate('schedule')
            .then(schedule => {

            })
                       
    }
}

module.exports = {
    createSchedule
};