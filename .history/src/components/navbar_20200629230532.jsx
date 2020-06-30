import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
            <nav className="navbar">
            <ul>
                <Link to="/website"><li>Website</li></Link>
                <Link to="/marketing"><li>Marketing</li></Link>
                <Link to="/aplikacion"><liAplikacion</Link>
            </ul>
            </nav> 
    );
}
 
export default NavBar