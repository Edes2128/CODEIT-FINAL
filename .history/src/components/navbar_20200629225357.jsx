import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        
            <nav className="navbar">


                <li><Link to="/website"></Link></li>
                <li><Link to="/marketing"></Link></li>
                <li><Link></Link></li>
    
            </nav> 
    
    );
}
 
export default NavBar