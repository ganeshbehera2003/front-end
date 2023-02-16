import React ,{useContext, useState} from "react";
import  axios from "axios";
// import './Product-form.css';
import EventContext from "../store/ProductContext";
import { Link } from "react-router-dom";
export const  Eventform =(props)=> {
    const EventCtx = useContext(EventContext);

const [formInput , setFormInput]= useState({
    Event_image:'',
    Event_name:'',
    Event_price:'',
    Event_startdate:'',
    Event_enddate:'',
    Event_place:''
})
const [ errormessage , seterrormessage]= useState('');

const itemNameHandler = (event)=>{
    setFormInput((prevState)=>{
        return{
            ...prevState,
            itemname: event.target.value
        }
    })
}
const itemPriceHandler = (event)=>{
    setFormInput((prevState)=>{
        return{
            ...prevState,
            itemprice: event.target.value
        }
    })
}
const itemImageHandler = (event)=>{
    setFormInput((prevState)=>{
        return{
            ...prevState,
            itemimage: event.target.value
        }
    })
}
const itemDescHandler = (event)=>{
    setFormInput((prevState)=>{
        return{
            ...prevState,
            itemdescription: event.target.value
        }
    })
}

const formSubmitHandler =(event)=>{
    
    if(formInput.itemname === '')
    {
        seterrormessage('please enter the name');
    }
    if(formInput.itemprice === '' )
    {
        seterrormessage('please enter the price');
    }
    if(formInput.itemimage === '' )
    {
        seterrormessage('please enter the image url');
    }
    if(formInput.itemdescription === '')
    {
        seterrormessage('please enter the item description');
    }
    if(formInput.itemname !== '' && formInput.itemprice !== '' && formInput.itemimage !== '' &&
    formInput.itemdescription !== '' )
    {
        seterrormessage(' form submitted succesfully');
        savedProductDATA(formInput);
      
      
    }
    event.preventDefault();
}
const savedProductDATA = async (formData)=>{
  const  product = {
    itemname : formData.itemname,
    itemprice : formData.itemprice,
    itemdescription : formData.itemdescription,
    itemimage : formData.itemimage,
  }
   const message = await axios.post("http://localhost:4001/add", product,{
    headers:{
        'Content-Type':'application/json',
    }
   })
   ProductCtx.setItems([...ProductCtx.items,product]);
}


            return(
                <div  className="main">
                    <div className="form-container">
                        
                        <form className="form-main" onSubmit={formSubmitHandler}>

                            <h1>add the shoes</h1>
                            <div className="error">{errormessage}</div>
                            <div className="name fm">
                                    <div className="title">item name:</div>
                                    <input type="text" id="itemname"  name="itemname" placeholder="name" onChange={itemNameHandler}></input>
                            </div>
                            <div className="price fm">
                                     <div className="title">item price:</div>
                                    <input type="text" id="itemprice" name="itemprice"placeholder="price" onChange={itemPriceHandler}></input>
                            </div>
                              <div className="image fm">
                                    <div className="title">item image:</div>
                                    <input type="text" id="itemimage" name="itemimage"placeholder="image"onChange={itemImageHandler}></input>
                            </div>
                            <div className="description fm">
                                    <div className="title">item description:</div>
                                    <input type="text" id="itemdescription" name="itemdescription"placeholder="description" onChange={itemDescHandler}></input>
                            </div>
                            <input type="submit" value="Submit"className="submit fm"></input>
                            <Link to = "/ADMINCART" className="HOME">SEE THE PRODUCTS</Link>
                            <Link to = "/" className="HOME">LOGOUT</Link>
                        </form>
                    </div>
                </div>
            );
    
}
