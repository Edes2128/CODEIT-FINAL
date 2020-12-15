import React from 'react';
import translate from '../i18n/translate';
export default function singleService({ logo, title, text, btntext ,valueBtn,onClick }) {
    return (
        <div className="single-service-content" >
            <img src={logo} alt="Services" width="100px" />
            <h3>{title}</h3>
            <p>{text}</p>
            <button value={valueBtn} onClick={onClick}>{translate('personalizo')}</button>
        </div>
    )
}