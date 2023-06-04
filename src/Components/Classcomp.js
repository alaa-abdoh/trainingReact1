
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
            <p> <span>category :</span> {props.category}</p>
            <p className="description"><span>Breif Description :</span> {props.description}</p>
            <span className="dots">...</span>
            <p><span>the price of this product is: </span>${props.price}</p>
            <Link to={`/pro/${props.id}`}>Details</Link>
         </div>
        
    )
   
    
   
}

export default Pro ;