const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const {Schema} = mongoose;
const Employee = require('./EmployeeModel');

const ScheduleSchema = new Schema({
    monday: {
        type: Date,
        required: false,
    },
    tuesday: {
        type: Date,
        required: false,
    },
    wednesday: {
        type: Date,
        required: false,
    },
    thursday: {
        type: Date,
        required: false,
    },
    friday: {
        type: Date,
        required: false,
    },
    saturday:{
        type: Date,
        required: false,
    },
    sunday: {
        type: Date,
        required: false,
    },    
    employees: [{ type: ObjectId, ref: 'Employee'}],
});

module.exports = mongoose.model('Schedule', ScheduleSchema, 'schedules');