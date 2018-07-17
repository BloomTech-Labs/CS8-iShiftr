import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class CreateSchedule extends Component {
    render() {
        return (
            <div>
                <BigCalendar
                    events={myEventsList}
                    startAccessor='startDate'
                    endAccessor='endDate'
                />
            </div>
        );
    }
}

export default CreateSchedule;
