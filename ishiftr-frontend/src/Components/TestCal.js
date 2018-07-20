import React from 'react';
import events from '../events';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';

moment().format('LT');

BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar)


function Event({ event }) {
  return (
    <React.Fragment>
      <span>
        <strong>{event.title}</strong><br/>
      </span>
      <span>
        <strong>{moment(event.start).format('LT')}</strong> { '-'}
        <strong>{moment(event.end).format('LT')}</strong>
      </span>
    </React.Fragment>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

class Dnd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  

  moveEvent({ event, start, end }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was dropped onto ${event.start}`)
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was resized to ${start}-${end}`)
  }

  render() {
    return (
      <DragAndDropCalendar
        selectable
        step={10}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView={BigCalendar.Views.MONTH}
        defaultDate={new Date(2018, 7, 18)}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)