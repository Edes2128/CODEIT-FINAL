import React,{useState}from 'react'


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

        fetch("https://floating-bayou-00934.herokuapp.com//app",
        {
            method: "POST",
            headers : {"Content-Type": "application/json"},
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
                <p style={{marginTop:"10px"}}>Specifiko ne detaje kerkesat dhe funksionalitetet e aplikacionit</p>
                <form className="form-aplikacion" onSubmit={submit} >
                    <div className="white">
                    <textarea className="specifik" name="textarea-app" value={specifikat} placeholder="Specifiko.." id="textarea-app" cols="30" rows="10" onChange={(e) => setSpecifiko(e.target.value)} ></textarea>
                   </div>
                    <div className="submit-app">
                            <div className="left">
                                <p>Plotesoni fushat duke na derguar automatikisht te dhenat e kerkeses</p>
                                <input type="text" placeholder="Emri*" value={emri} onChange={(e) => vendosEmer(e.target.value)} required/>
                                <input type="email" placeholder="Email*" value={email} onChange={(e) => vendosEmail(e.target.value)} required/>
                                <input type="tel" placeholder="Tel*" value={tel}  onChange={(e) => vendosTel(e.target.value)} required/>

                            </div>
                            <div className="right">
                                <textarea name="kerkesetjeter" id="kerkesetjeter" value={kerkeseTjeter} placeholder="Kerkese Tjeter" cols="30" rows="10" onChange={(e) => vendosKerkese(e.target.value)}></textarea>
                            </div>

                    </div>
                    <div className="submit">
                            <input type="submit" value="Dergo Kerkesen"/>
                    </div>
                </form>
            </div>
            </div>
    );
}
export default Aplikacion;
