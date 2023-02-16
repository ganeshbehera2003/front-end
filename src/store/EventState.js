import React, { useState } from 'react'
import EventContext from './EventContext'

export const EventState = (props) => {
    const [events , setEvents] = useState([]);
  return (
   <EventContext.Provider value={{events , setEvents}}>
   {props.children}
   </EventContext.Provider>
  )
}
