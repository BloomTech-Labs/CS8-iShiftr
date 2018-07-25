const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const {Schema} = mongoose;
const Employee = require('./EmployeeModel');

const ShiftSchema = new Schema({
    date:String,
    startTime:Number,
    endtime:Number,
    shiftLength:Number,
    employees: [{ type: ObjectId, ref: 'Employee'}],
});

const WeekSchema = new Schema({
    day: String,
    shifts: [ShiftSchema]
});

const ScheduleSchema = new Schema({
    week: [WeekSchema]
});

module.exports = mongoose.model('Schedule', ScheduleSchema, 'schedules');
module.exports = mongoose.model('Shift', ShiftSchema);