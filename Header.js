import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            
            <ul>
                <li>
                    <Link to = "/Home">Home</Link>
                    <Link to = "/Contact">ContactUs</Link>
                    <Link to = "/About">AboutUs</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Header;