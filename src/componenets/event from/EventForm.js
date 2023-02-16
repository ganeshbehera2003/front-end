import React, { useState } from "react";
import './EventForm.css'; 
import axios from "axios";

const EventForm = (props) =>{

    const [formInput,setFormInput] = useState({
        image:'',
        name:'',
        price:'',
        startdate:'',
        enddate:'',
        place:''
    })
    const EventImageHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                image:event.target.value
            }
        });
    }
    const EventNameHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
            ...prevState,
            name:event.target.value
            }
        });
    }
    const EventPriceHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                price:event.target.value
            }
        });
    }
    const EventStartDateHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                startdate:event.target.value
            }
        });
    }
    const EventEndDateHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
            ...prevState,
            enddate:event.target.value
            }
        });
    }
    const EventPlaceHandler = (event)=>{
        setFormInput((prevState)=>{
            return{
            ...prevState,
            place:event.target.value
            }
        });
    }
    // console.log(formInput);
    const formSubmitHandler = (event)=>{
        // console.log(formInput);
        saveNewEventData(formInput);
        // props.onEventAdded(formInput);
        event.preventDefault();
    }

    const saveNewEventData = async(formdata)=>{
        const eventData = {
            event_image:formdata.image,
            event_name:formdata.name,
            event_price:formdata.price,
            event_startdate:formdata.startdate,
            event_enddate:formdata.enddate,
            event_place:formdata.place
        }
        const message = await axios.post('http://localhost:4001/event/add', eventData, {
            
            headers:{
                'Content-Type':'application/json'
            },
            

        })
    
    }

    return(
        <div className="form-container">
        <h1>Add Event</h1>
            <form onSubmit={formSubmitHandler}>
                <div className="form-input">
                    <input type="text" placeholder="Event Image" onChange={EventImageHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Event Name" onChange={EventNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Event Price" onChange={EventPriceHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Start Date" onChange={EventStartDateHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="End Date" onChange={EventEndDateHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Event Place" onChange={EventPlaceHandler}/>
                </div>
                <div className="form-input">
                    <button className="btn_add_event">Add Event</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default EventForm;