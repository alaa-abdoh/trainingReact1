import { Link } from "react-router-dom";

function Header(props){
    return(
        <div className="header">
            <Link to="/">logo</Link>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/xxx">About</Link>
            </ul>
        </div>
    )
}

export default Header;