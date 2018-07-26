import React from 'react';
import axios from 'axios';
import moment from 'moment';
import '../css/schedule.css';
import EmployeeOnShift from './EmployeeOnShift';

//import events from '../events';
//import HTML5Backend from 'react-dnd-html5-backend';
//import { DragDropContext } from 'react-dnd';
//import BigCalendar from 'react-big-calendar';
//import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
//import moment from 'moment';

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';

const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

// moment().format('LT');

// BigCalendar.momentLocalizer(moment);
// const DragAndDropCalendar = withDragAndDrop(BigCalendar)


// function Event({ event }) {
//   return (
//     <React.Fragment>
//       <span>
//         <strong>{event.title}</strong><br/>
//       </span>
//       <span>
//         <strong>{moment(event.start).format('LT')}</strong> { '-'}
//         <strong>{moment(event.end).format('LT')}</strong>
//       </span>
//     </React.Fragment>
//   )
// }

// function EventAgenda({ event }) {
//   return (
//     <span>
//       <em style={{ color: 'magenta' }}>{event.title}</em>
//       <p>{event.desc}</p>
//     </span>
//   )
// }

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: [],
      employees: [],
    }

    // this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount(){
      axios.get(`http://localhost:5000/api/${id}/employees`, config)
      .then((res) => {
          console.log(res.data);
          this.setState({
              employees : res.data
          })
      })
      .catch(function (error) {
          console.log('there is an error', error);
      });

      
      axios.get(`http://localhost:5000/api/schedule/${id}`, config)
      .then((res) => {
          console.log(res.data);
          this.setState({
              schedules : res.data
          })
      })
      .catch(function (error) {
          console.log('there is an error', error);
      });

  }

  

  // moveEvent({ event, start, end }) {
  //   const { events } = this.state

  //   const idx = events.indexOf(event)
  //   const updatedEvent = { ...event, start, end }

  //   const nextEvents = [...events]
  //   nextEvents.splice(idx, 1, updatedEvent)

  //   this.setState({
  //     events: nextEvents,
  //   })

  //   alert(`${event.title} was dropped onto ${event.start}`)
  // }

  // resizeEvent = (resizeType, { event, start, end }) => {
  //   const { events } = this.state

  //   const nextEvents = events.map(existingEvent => {
  //     return existingEvent.id === event.id
  //       ? { ...existingEvent, start, end }
  //       : existingEvent
  //   })

  //   this.setState({
  //     events: nextEvents,
  //   })

  //   alert(`${event.title} was resized to ${start}-${end}`)
  // }

  render() {
    return (

      <div className = 'gen-container'>
      <h3>Weekly Schedule</h3>
        <div className = "schedule">
          {this.state.schedules.map(schedule => {
              return (
                  <div key={schedule._id} className = 'schedule-row'>
                      <div className='schedule-element-header'>
                          <div>{schedule.day}</div>
                          <div>{moment(schedule.date).format('LL')}</div> 
                      </div>
                      <EmployeeOnShift day={schedule.day} employees={this.state.employees}/>
                  </div>
              )
          })}
        </div>
      </div>


      // <DragAndDropCalendar
      //   selectable
      //   step={10}
      //   events={this.state.events}
      //   onEventDrop={this.moveEvent}
      //   resizable
      //   onEventResize={this.resizeEvent}
      //   defaultView={BigCalendar.Views.MONTH}
      //   defaultDate={new Date(2018, 7, 18)}
      //   components={{
      //     event: Event,
      //     agenda: {
      //       event: EventAgenda,
      //     },
      //   }}
      // />
    );
  }
}

export default Schedule;