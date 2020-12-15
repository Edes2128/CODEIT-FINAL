import React,{useState}from 'react'
import translate from '../../i18n/translate';

const Aplikacion = () => {

    const [specifikat,setSpecifiko]= useState('');
    const [emri,vendosEmer]= useState('');
    const [email,vendosEmail]= useState('');
    const [tel,vendosTel]= useState('');
    const [kerkeseTjeter,vendosKerkese]= useState('');
    const [pop,putPop] = useState(false)


    const submit = (e) => {

        e.preventDefault();

        let payload = {
            specifikat : specifikat,
            emri : emri,
            email : email,
            tel : tel,
            kerkeseTjeter : kerkeseTjeter
        };

        fetch("https://codeit-last.herokuapp.com/app",
        {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
            body: JSON.stringify(payload)
    }).catch(e => console.log(e))
    vendosEmer('')
    vendosEmail('')
    vendosTel('')
    vendosKerkese('')
    setSpecifiko('')
    putPop(true)
    }


    return (
        <div>
    <div className={pop ?"pop-up-show":"close"}>
<div className={pop ? "popup show" : "popup"}>
                <div className="content">
                <div className="icon-ticket"><i className="fa fa-check-circle"></i></div>
                <div className="mesazhi">
                    <h1>Faleminderit!</h1>
                    <p>Ju do te merrni oferten tuaj te personalizuar</p>
                    <p> brenda 24h ne adresen e emailit qe plotesuat</p>
                </div>
                <div className="close-popup">
                    <button className="popup-close" onClick={() => putPop(false)}>Close</button>
                </div>
                </div>
        </div>
        </div>
            <div className="aplikacion">
                <p style={{marginTop:"10px"}}>{translate('appTitle')}</p>
                <form className="form-aplikacion" onSubmit={submit} >
                    <div className="white">
                    <textarea className="specifik" name="textarea-app" value={specifikat}  id="textarea-app" cols="30" rows="10" onChange={(e) => setSpecifiko(e.target.value)} ></textarea>
                   </div>
                    <div className="submit-app">
                            <div className="left">
                                <p>{translate('titulliformes')}</p>
                                <label htmlFor="">{translate('emri')}</label>
                                <input type="text" value={emri} onChange={(e) => vendosEmer(e.target.value)} required/>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Email*" value={email} onChange={(e) => vendosEmail(e.target.value)} required/>
                                <label htmlFor="">{translate('phone')}</label>
                                <input type="tel" placeholder="Cel..." value={tel}  onChange={(e) => vendosTel(e.target.value)} />

                            </div>
                            <div className="right">
                                <label htmlFor="">{translate('kerkesa')}</label>
                                <textarea name="kerkesetjeter" id="kerkesetjeter" value={kerkeseTjeter}  cols="30" rows="10" onChange={(e) => vendosKerkese(e.target.value)}></textarea>
                            </div>

                    </div>
                    <div className="submit">
                            <label className="submit-button" htmlFor="submit">{translate('dergo')}</label>
                            <input  hidden id="submit" type="submit" />
                    </div>
                </form>
            </div>
            </div>
    );
}
export default Aplikacion;
