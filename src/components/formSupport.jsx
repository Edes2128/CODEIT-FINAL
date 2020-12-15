import React, { useState } from 'react'
import translate from '../i18n/translate';

export default function FormSupport({ close }) {
    const [emri, vendosEmer] = useState('');
    const [email, vendosEmail] = useState('');
    const [tel, vendosTel] = useState('');
    const [kerkeseTjeter, vendosKerkese] = useState('');
    const [link, vendosLink] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        let payload = {
            emri,
            email,
            tel,
            kerkeseTjeter,
            link
        };

        fetch("https://codeit-last.herokuapp.com/support",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(payload)
            })
        vendosKerkese('')
        vendosEmer('')
        vendosEmail('')
        vendosTel('')
        vendosLink('')
        close()

    }


    return (
        <>
            <div className="opa-seo-form" onClick={close}></div>

            <form className="form-seo" onSubmit={onSubmit} >
            <div className="close-div" onClick={close} ><i className="fa fa-times"></i></div>
                <div className="label-input">
                    <label htmlFor="emri">{translate('emri')}</label>
                    <input type="text" name="emri" id="emri"  placeholder="..." onChange={(e) => vendosEmer(e.target.value)} required />
                </div>

                <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email..." onChang={(e) => vendosEmail(e.target.value)} required />
                </div>

                <div className="label-input">
                    <label htmlFor="tel">{translate('phone')}</label>
                    <input type="tel" name="tel" id="tel" placeholder="Cel..." onChange={(e) => vendosTel(e.target.value)} />
                </div>

                <div className="label-input">
                    <label htmlFor="linku">{translate('link')}</label>
                    <input type="text" name="linku" id="linku" placeholder="https://wwww.codeit.al" required onChange={(e) => vendosLink(e.target.value)} />
                </div>

                <div className="label-input-textarea">
                    <label htmlFor="kerkesa">{translate('kerkesa')}</label>
                    <textarea name="kerkesa" id="kerkesa" placeholder="..." onChange={(e) => vendosKerkese(e.target.value)} ></textarea>
                </div>
                <div className="div-form-seo-submit">
                <label className="seo-submit" htmlFor="submit">{translate('dergo')}</label>
                <input id="submit" hidden type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}
