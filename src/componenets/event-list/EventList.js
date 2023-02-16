import React, { useContext, useEffect } from 'react'
import EventContext from '../../store/EventContext'
import { Event } from '../event/Event'
export const EventList = (props) => {
  const EventCtx = useContext(EventContext)
  useEffect(()=>{
    getEvents();
  },[EventCtx.events])
  const getEvents = async(props)=>{
    const data = await fetch('http://localhost:4001/event/');
    const events_data = await data.json();
    // console.log(events_data);
    EventCtx.setEvents(events_data.events);
  }
  
  return (
    <div>
      {props.children}
      {EventCtx.events.map((eventItem, index) => (
        <Event
          key={index}
          image={eventItem.event_image}
          name={eventItem.event_name}
          price={eventItem.event_price}
          start_date={eventItem.event_startdate}
          end_date={eventItem.event_enddate}
          place={eventItem.event_place}
        />
      ))}
    </div>
  )
}
