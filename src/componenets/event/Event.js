import React from "react";
import './Event.css'

function Event(props){
    return (
        <div>
            <div className="event_container">
                <div className="event_image">
                    <img src={props.image} />
                </div>
                <div className="event_Name">{props.name}</div>
                <div className="event_price">{props.price}</div>
                <div className="date">
                    <div className="start_date">{props.start_date}</div>
                    <div className="end_date">{props.end_date}</div>
                </div>
                <div className="button-container">
                    <button className="Register">Register</button>
                </div>
            </div>
        </div>
    );
}
export default Event;