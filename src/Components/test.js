import React, { useEffect, useState } from "react"

function Test(props){
 let [state,setState] = useState(0)
 let [state2,setState2] = useState(0)

 useEffect(()=>{
    document.title = state;
 },[state])
  
 return( 
    <> 
            
            <button onClick={()=>{setState(state+1)}}>+ state</button>
            <p>state now = {state}</p>
            <button onClick={()=>{setState2(state2+1)}}>+ state2</button>
            <p>state2 now = {state2}</p>
    </>    
 )
}

export default Test;