
// function welcome(obj){
//     return(
//         <h2>Hello {obj.name} you are {obj.age} year old, and fail in love with {obj.love} </h2>
//         )
        
//     }
import React, { useState } from "react"
import { Link } from "react-router-dom";

function Pro (props){

    return(
        <div className="product">
            <h3>{props.title}</h3>
            <p> <span style={{color:"black", fontWeight:"bold"}}>Description :</span> {props.description}</p>
            <p>this product includes in : <span  style={{"fontSize":"22px","color":"red"}}>{props.category}</span></p>
            <span>the price of this product is {props.price}</span>
            <Link to={`product/${props.id}`}>Details</Link>
         </div>
        
    )
   
    
   
}

export default Pro ;