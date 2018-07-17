import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
    <div className="container">
        <BigCalendar
            events={[]}
            startAccessor='startDate'
            endAccessor='endDate'
        />
    </div>
 );
    

export default Calendar;
