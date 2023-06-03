import { Link } from "react-router-dom";

function Introduction(){
    return(
        <>
        <div className="landing">
            <div className="content">
                <h1>Welcome in Our Shop</h1>
                <p>You will find all what you need here</p>
                <Link to="pro">Products Page</Link>
            </div>
        </div>
        <div id="about">
            <h2>About Us</h2>
            <p>You are on a website that sells products online, 
            here you will find everything related to electronics, 
            jewelry, men's clothing, and women's clothing .</p>
        </div>
        </>
        
    )
}

export default Introduction;