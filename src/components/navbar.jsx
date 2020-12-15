import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import translate from '../i18n/translate';

const NavBar = () => {

    const [active, setActive] = useState('');
    return (
        <nav className="navbar">
            <h3>{translate('zgjidh')}</h3>
            <ul>
                <Link onClick={() => setActive('website')} to="/"><li className={active === 'website' || window.location.pathname === "/" ? "nav-li active" : "nav-li"} >{translate('webservice')}</li></Link>
                <Link onClick={() => setActive('marketing')} to="/marketing"><li className={active === 'marketing' || window.location.pathname === "/marketing" ? "nav-li active" : "nav-li"}>Marketing</li></Link>
                <Link onClick={() => setActive('aplikacion')} to="/aplikacion"><li className={active === 'aplikacion' || window.location.pathname === "/aplikacion" ? "nav-li active" : "nav-li"}>{translate('appservice')}</li></Link>
                <Link onClick={() => setActive('services')} to="/services"><li className={active === 'services' || window.location.pathname === "/services" ? "nav-li active" : "nav-li"}>{translate('serviceother')}</li></Link>
            </ul>
        </nav>
    );
}
export default NavBar;
