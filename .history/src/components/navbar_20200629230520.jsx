import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
            <nav className="navbar">
            <ul>
                <Link to="/website"><li>Website</li></Link>
                <Link to="/marketing"><Marketing</Link>
                <Link to="/aplikacion">Aplikacion</Link>
            </ul>
            </nav> 
    );
}
 
export default NavBar