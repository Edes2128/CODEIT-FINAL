import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
            <nav className="navbar">
            <ul>
                <li><Link to="/website">Website</Link></li>
                <li><Link to="/marketing">Marketing</Link></li>
                <li><Link to="/aplikacion">Aplikacion</Link></li>
            <
                </nav> 
    );
}
 
export default NavBar