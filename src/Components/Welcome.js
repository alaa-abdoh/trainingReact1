

import React, { useEffect, useState } from "react"
import Pro from "..//Components//Classcomp"

function Products (props){
   let [type, setType] = useState("All");
   let [arr, setarr] = useState([]);
   useEffect(()=>{
     fetch("https://fakestoreapi.com/products").then((prom)=>{return prom.json()}).then((array)=>setarr(array))
   },[])

  function prepare(value){
   let divsArr = arr.map((obj) => {
    if(obj.category == value || value == "All")
    return(<Pro key={obj.id} {...obj} />)
  
  })
  return divsArr
  }
     
   function setState(newState){
      setType(newState)
   }
   
   return(
        <>
        <div className="content">
            <div className="Buttons">
              <button onClick={()=>{setState("All")}}>All</button>
              <button onClick={()=>{setState("jewelery")}}>jewelery</button>
              <button onClick={()=>{setState("electronics")}}>electronics</button>
              <button onClick={()=>{setState("women's clothing")}}>women's clothing</button>
              <button onClick={()=>{setState("men's clothing")}}>men's clothing</button>
            </div>
            <div className="products">
              {prepare(type)}
            </div>
        </div>
        </>
        
      )
    
}

export default Products ;