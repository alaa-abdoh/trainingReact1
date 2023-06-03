import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
   <div className="notFound">
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt ="Not Found Page " />
        </div>
        <div className="text">
            <p> <span>Opps!</span>Page not found</p>
            <p>The page you are looking for does not exist</p>
            <Link to="/" className="btn btn-light">Go Home</Link>
        </div>
    
   </div>
    
  );
}

export default NotFound;
