import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        
            <nav className="navbar">


                <li><Link to="/website">Website</Link></li>
                <li><Link to="/marketing"></Link></li>
                <li><Link to="/aplikacion"></Link></li>
    
            </nav> 
    
    );
}
 
export default NavBar