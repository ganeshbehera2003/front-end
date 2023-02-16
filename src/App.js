import "./App.css";
import Event from "./componenets/event/Event";
import EventForm from "./componenets/eventfrom/EventForm";
import { useEffect, useState } from "react";
import axois from "axios";

import { Login } from "./componenets/login/Login";
import { EventList } from "./componenets/event-list/EventList";
import { EventState } from "./store/EventState";

function App() {

  return (
    <div className="App">
      <EventState>
        <EventForm />
        <EventList><h1>List Events</h1></EventList>
      </EventState>
      {/* <Login /> */}
    </div>
  );
}

export default App;
