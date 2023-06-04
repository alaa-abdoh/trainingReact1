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
            <div className="details" style={{padding:"40px 0"}}>
                <div className="container">
                    <div className="pro">
                        <p>{pro.title}</p>
                        <p className="price">${pro.price}</p>
                        <p className="rate">{pro.rating.rate} *</p>
                        <p> <span>Full Description</span> : {pro.description}</p>
                        <img src={pro.image} alt="product image"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails