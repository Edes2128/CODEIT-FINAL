import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {

    const [active,setActive] = useState('website');


    return ( 
            <nav className="navbar">
            <h3>Zgjidh sherbimin qe deshiron</h3>
            <ul>
                <Link to="/"><li onClick={() => setActive('website')} className={active === 'website' ? "nav-li active" :"nav-li" } >Website</li></Link>
                <Link to="/marketing"><li  onClick={() => setActive('marketing')} className={active === 'marketing' ? "nav-li active" :"nav-li" }>Marketing</li></Link>
                <Link to="/aplikacion"><li onClick={() => setActive('aplikacion')} className={active === 'aplikacion' ? "nav-li active" :"nav-li" }>Aplikacion</li></Link>
            </ul>
            </nav> 
    );
}
export default NavBar;
