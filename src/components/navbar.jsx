import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {

    const [active,setActive] = useState('');

    const changeActive = (e) => {
       
            setActive(e.target.className)
  
        
    }
    console.log(active)

    return ( 
            <nav className="navbar">
            <h3>Zgjidh sherbimin qe deshiron</h3>
            <ul>
                <Link to="/"><li onClick={changeActive} className={"nav-li" === active ? "nav-li active" :"nav-li" } >Website</li></Link>
                <Link to="/marketing"><li onClick={changeActive}  className={"nav-li" === active ? "nav-li active" :"nav-li" }>Marketing</li></Link>
                <Link to="/aplikacion"><li onClick={changeActive}  className={"nav-li" === active ? "nav-li active" :"nav-li" }>Aplikacion</li></Link>
            </ul>
            </nav> 
    );
}
export default NavBar;
