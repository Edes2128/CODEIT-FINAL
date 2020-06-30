import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
            <nav className="navbar">
            <h3>Zgjidh sherbimin qe deshiron</h3>
            <ul>
                <Link to="/website"><li>Website</li></Link>
                <Link to="/marketing"><li>Marketing</li></Link>
                <Link to="/aplikacion"><li>Aplikacion</li></Link>
            </ul>
            </nav> 
    );
}
 
export default NavBar;
