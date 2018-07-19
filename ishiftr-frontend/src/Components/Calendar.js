import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

BigCalendar.momentLocalizer(moment);

const startDate = new Date(2018, 7, 1)
const endDate = new Date(2018, 7, 5)

const Calendar = props => (
    
    <div className="container">
        <BigCalendar
            events={[]}
            startAccessor = {startDate}
            endAccessor= {endDate}
        />
    </div>
 );
    

export default Calendar;
