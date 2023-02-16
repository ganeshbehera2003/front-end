import "./App.css";
import Event from "./componenets/event/Event";
import EventForm from "./componenets/event from/EventForm";
import { useEffect, useState } from "react";
import axois from "axios";

function App() {
  const [events, setEvents] = useState([]);

  function addNewEventHandler(eventItem) {
    console.log("added Event");
    console.log(eventItem);
    const eventObj = {
      event_image: eventItem.event_image,
      event_name: eventItem.event_name,
      event_price: eventItem.event_price,
      event_startdate: eventItem.event_startdate,
      event_enddate: eventItem.event_enddate,
      event_place: eventItem.event_place,
    };
    // setEvents([...events,eventObj]);
  }

  const getEvents = async () => {
    const data = await fetch("http://localhost:4001/event");
    const event_data = await data.json();
    setEvents([...events, ...event_data.events]);
  };

  // const getEvents = async() =>{
  //     const data = await axois.get("http://localhost:4001/event");
  //     console.log(data);
  //     setEvents([...events, ...data.events[0]])
  // }

  useEffect(() => {
    // const events = setTimeout(() => {
    //   getEvents();
    // }, 1000);

    // return () => {
    //   clearTimeout(events);
    // };
    getEvents();

  },[]);
  

  return (
    <div className="App">
      <EventForm onEventAdded={addNewEventHandler} />
      <h1>List Events</h1>
      {events.map((eventItem, index) => (
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
  );
}

export default App;
