import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
function ProductDetails(){
    let [pro, setpro] = useState([]);
    let num = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${num.id}`).then((prom)=>{return prom.json()}).then((obj)=>setpro(obj))
      },[])
    return(
        <>
            <h1>This is Details Page for product number {num.id}</h1>
            <p>Title : {pro.title}</p>
            <p> Price : ${pro.price}</p>
            <p>Description : {pro.description}</p>
            <img style={{width:"250px"}} src={pro.image}></img>
        </>
    )
}

export default ProductDetails