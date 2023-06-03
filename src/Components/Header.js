import { Link } from "react-router-dom";

function Header(props){
    return(
        <div className="header">
            <Link to="/">logo</Link>
            <ul>
                <Link to="/">Home</Link>
                <a href="#about">About</a>
            </ul>
        </div>
    )
}

export default Header;