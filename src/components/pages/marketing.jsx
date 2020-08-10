import React, { useState ,useEffect} from 'react';

const Marketing = () => {

    const [menaxhimSocial, duaMenaxhimSocial] = useState(false);
    const [duaSetFotografik, vendosSetFotografik] = useState(false);
    const [duaFushatMarketingu, vendoFushatMarketingu] = useState(false);
    const [markaRegjistruar, regjistroMarken] = useState('Jo');
    const [isChecked, setIsChecked] = useState(false);
    const [topologjia, shtovlere] = useState('');
    const [biznesitInevojitet,shtovlere1] = useState([]);
    const [frekuencaPostimeveMediaJaves,shtovlere2] = useState('')
    const [setiFotografikNeMuaj,shtovlere3] = useState('')
    const [vendiPromovimit,shtovlere4] = useState([]);
    const [produktetNeWeb,shtovlere1a] = useState('')
    const [hedhjaProdukteveEcommerce,shtovlere1b] = useState('')
    const [platforma,shtovlere1c] = useState('')
    const [pagesa,shtovlere1d] = useState('')
    const [dizajniWebit,shtovlere7] = useState('')
    const [gjuhetWeb,shtovlere8] = useState('')
    const [hedhjaMaterialeveWeb,shtovlere9] = useState('')
    const [faqetNeWeb,shtovlere10] = useState('')
    const [hostDomain,shtovlere11] = useState('')
    const [rendesiaSEO,shtovlere12] = useState('')
    const [elementetNeWeb,shtovlere13] = useState([])
    const [emri,vendosEmer]= useState('');
    const [email,vendosEmail]= useState('');
    const [tel,vendosTel]= useState('');
    const [kerkeseTjeter,vendosKerkese]= useState('');
    const [pop,putPop] = useState(false)
    useEffect(() =>{
        if(topologjia === 'ecommerce'){
            shtovlere1a('50')
            shtovlere1b('codeit')
            shtovlere1c('wordpress')
            shtovlere1d('cash')
        }else{
            shtovlere1a('')
            shtovlere1b('')
            shtovlere1c('')
            shtovlere1d('')
        }
    },[topologjia])

    useEffect(() =>{

        if(isChecked){
            shtovlere('prezantues')
            shtovlere7('thjeshte')
            shtovlere8('nje')
            shtovlere9('klient')
            shtovlere10('5')
            shtovlere11('skam')
            shtovlere12('aspak')
        }else{
            shtovlere('')
            shtovlere7('')
            shtovlere8('')
            shtovlere9('')
            shtovlere10('')
            shtovlere11('')
            shtovlere12('')
        }


    },[isChecked])

    const onChange = (e) => {
        shtovlere(e.target.value);
    }
    const pyetja1 = (e) =>{

        const item = e.target

        if(item.checked){
            shtovlere1(biznesitInevojitet.concat(item.value));
        }else if(!item.checked){
            biznesitInevojitet.splice(item.value,1)
        }
    }

    const pyetja2 = (e) => {
        shtovlere2(e.target.value);
    }


    const pyetja3 = (e) => {
        shtovlere3(e.target.value);
    }

    const pyetja4 = (e) =>{

        const item = e.target

        if(item.checked){
            shtovlere4(vendiPromovimit.concat(item.value));
        }else if(!item.checked){
            vendiPromovimit.splice(item.value,1)
        }
    }
    const pytetja5 = (e) => {

        const item = e.target

        if(item.checked){
            return regjistroMarken('Po')
        }
        regjistroMarken('Jo')

    }
    const pyetja5A = (e) =>{
        shtovlere1a(e.target.value)
    }

    const pyetja5B = (e) =>{
        shtovlere1b(e.target.value)
    }

    const pyetja5C = (e) =>{
        shtovlere1c(e.target.value)
    }

    const pyetja5D = (e) =>{
        shtovlere1d(e.target.value)
    }
    const pyetja7 = (e) =>{
        shtovlere7(e.target.value)
    }
    const pyetja8 = (e) =>{

        shtovlere8(e.target.value)

    }
    const pyetja9 = (e) =>{
        shtovlere9(e.target.value)
    }
    const pyetja10 = (e) =>{

        shtovlere10(e.target.value)

    }
    const pyetja11 = (e) =>{
        shtovlere11(e.target.value)
    }

    const pyetja12 = (e) =>{
        shtovlere12(e.target.value)
    }

    const pyetja13 = (e) =>{

        const item = e.target

        if(item.checked){
            shtovlere13(elementetNeWeb.concat(item.value));
        }else if(!item.checked){
            elementetNeWeb.splice(item.value,1)
        }
    }
    const reload = () =>{
        window.location.reload()
    }
    const onSubmit = (e) => {
        e.preventDefault();

        let payload = {
            emri,
            email,
            tel,
            kerkeseTjeter,
            topologjia,
            hedhjaProdukteveEcommerce,
            produktetNeWeb,
            platforma,
            pagesa,
            dizajniWebit,
            gjuhetWeb,
            hedhjaMaterialeveWeb,
            faqetNeWeb,
            hostDomain,
            rendesiaSEO,
            elementetNeWeb,
            biznesitInevojitet,
            frekuencaPostimeveMediaJaves,
            setiFotografikNeMuaj,
            vendiPromovimit ,
            markaRegjistruar
        };

        fetch("https://codeit-last.herokuapp.com/market",
        {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })

        setIsChecked(false)
        shtovlere('')
        shtovlere1([])
        shtovlere2('')
        shtovlere3('')
        shtovlere4([])
        shtovlere7('')
        shtovlere8('')
        shtovlere9('')
        shtovlere10('')
        shtovlere11('')
        shtovlere12('')
        shtovlere13([])
        vendosEmer('')
        vendosEmail('')
        vendosTel('')
        vendosKerkese('')
        putPop(true)
        regjistroMarken('Jo')
        vendoFushatMarketingu(false)
        vendosSetFotografik(false)
        duaMenaxhimSocial(false)
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
                    <button className="popup-close" onClick={reload}>Close</button>
                </div>
                </div>
        </div>
        </div>
        <div className="marketing">
            <form className="form" onSubmit={onSubmit}>
                <div className="nenta">

                    <p className="margin-bottom">1.Biznesit tuaj i nevojitet:<span className="span">(mund te zgjidhni me shume se 1 alternative)</span></p>
                    <div className="marketing-9">

                        <input type="checkbox" className="checkbox-choices" name="nevojitet" id="emer" value="emer"  onChange={pyetja1}/>
                        <label htmlFor="emer">Emer</label><br />

                        <input type="checkbox" className="checkbox-choices" name="nevojitet" id="logo" value="logo"  onChange={pyetja1}/>
                        <label htmlFor="logo">Logo</label><br />

                        <input type="checkbox" className="checkbox-choices" name="nevojitet" id="imazh-marke" value="imazh-marke" onChange={pyetja1}/>
                        <label htmlFor="imazh-marke">Imazh Marke</label><br />

                        <input type="checkbox" className="checkbox-choices" name="nevojitet" id="tetreja" value="tetreja" onClick={pyetja1}/>
                        <label htmlFor="tetreja">Te treja</label>
                    </div>
                </div>

                <div className="dhjeta">
                    <div className="dhjeta-left">
                        <p>2.Deshiron menaxhim te mediave Sociale?</p>

                        <div className="switch_box box_4">
                            <div className="input_wrapper">
                                <input type="checkbox" className="switch_4" onChange={(event) => duaMenaxhimSocial(event.currentTarget.checked)} checked={menaxhimSocial} />
                                <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                    <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                </svg>
                                <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                    <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {menaxhimSocial === true &&
                        <div className="dhjeta-right">
                            <p className="margin-bottom">Cila eshte frekuenca e postimeve ne media gjate javes?</p>
                            <label className="label">
                                <input type="radio" name="frekuenca" id="3" value="3" onClick={pyetja2} />
                                <span>1-3</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="frekuenca" id="7" value="7" onClick={pyetja2}/>
                                <span>4-7</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="frekuenca" id="14" value="14" onClick={pyetja2}/>
                                <span>8-14</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="frekuenca" id="15" value="15" onClick={pyetja2}/>
                                <span>15+</span>
                            </label>
                        </div>}
                </div>

                <div className="eleven">
                    <div className="eleven-left">
                        <p>3.Ju duhet set fotografik?</p>
                        <div className="switch_box box_4">
                            <div className="input_wrapper">
                                <input type="checkbox" className="switch_4" onChange={(event) => vendosSetFotografik(event.currentTarget.checked)} checked={duaSetFotografik} />
                                <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                    <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                </svg>
                                <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                    <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {duaSetFotografik === true &&
                        <div className="eleven-right">

                            <p className="margin-bottom">Sa here ne muaj ju nevojitet seti fotografik?</p>
                            <label className="label">
                                <input type="radio" name="seti" id="1here" value="1here" onClick={pyetja3}/>
                                <span>1 here ne muaj</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="seti" id="2here" value="2here" onClick={pyetja3}/>
                                <span>2 here ne muaj</span>
                            </label>
                        </div>

                    }

                </div>


                <div className="twelve">
                    <div className="twelve-left">
                        <p>4.Deshironi fushat marketingu?</p>
                        <div className="switch_box box_4">
                            <div className="input_wrapper">
                                <input type="checkbox" className="switch_4" onChange={(event) => vendoFushatMarketingu(event.currentTarget.checked)} checked={duaFushatMarketingu} />
                                <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                    <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                </svg>
                                <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                    <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    {duaFushatMarketingu === true &&
                        <div className="twelve-right">

                            <p className="margin-bottom">Ku deshironi te promovoheni?<br /><span className="span">(mund te zgjidhni me shume se 1 alternative)</span></p>
                            <input type="checkbox" className="checkbox-choices" name="promovim" id="tv" value="tv" onClick={pyetja4}/>
                            <label htmlFor="tv">TV</label><br />

                            <input type="checkbox" className="checkbox-choices" name="promovim" id="radio" value="radio" onClick={pyetja4}/>
                            <label htmlFor="radio">Radio</label><br />

                            <input type="checkbox" className="checkbox-choices" name="promovim" id="online" value="online" onClick={pyetja4}/>
                            <label htmlFor="online">Online</label><br />

                            <input type="checkbox" className="checkbox-choices" name="promovim" id="portale-m" value="portale" onClick={pyetja4}/>
                            <label htmlFor="portale-m">Portale</label><br />

                            <input type="checkbox" className="checkbox-choices" name="promovim" id="tegjitha" value="tegjitha" onClick={pyetja4}/>
                            <label htmlFor="tegjitha">Te gjitha</label>
                        </div>

                    }
                </div>

                <div className="thirteen">

                    <p>5.Deshironi ta regjistroni marken ligjerisht?</p>
                    <div className="switch_box box_4">
                                <div className="input_wrapper">
                                    <input type="checkbox" className="switch_4" checked={markaRegjistruar === 'Po' ? true : false} onChange={pytetja5} />
                                    <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                        <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                    </svg>
                                    <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                        <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                </div>


                <div className="web-marketing">

                    <h3>Deshironi Website?</h3>


                    <div className="switch_box box_4">
                        <div className="input_wrapper">
                            <input type="checkbox" className="switch_4" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
                            <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                            </svg>
                            <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {isChecked === true &&

                    <div className="website">
                        <div id="pyetja1" className="nje">
                            <p className="margin-bottom">6.Cila eshte topologjia e biznesit tuaj?</p>
                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="prezantues" id="prezantues" checked={topologjia === 'prezantues' ? true : false } name="tipi" onClick={onChange} />
                                    <span>Prezantues</span>
                                </label>
                            </div>

                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="ecommerce" id="ecommerce" name="tipi" onClick={onChange} />
                                    <span>E-commerce</span>
                                </label>
                            </div>

                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="booking" id="booking" name="tipi" onClick={onChange} />
                                    <span>Booking</span>
                                </label>
                            </div>

                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="portale" id="portale" name="tipi" onClick={onChange} />
                                    <span>Portale</span>
                                </label>
                            </div>

                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="delivery" id="delivery" name="tipi" onClick={onChange} />
                                    <span>Delivery</span>
                                </label>
                            </div>

                            <div className="margin-pyetjet">
                                <label className="label">
                                    <input type="radio" value="reference" id="reference" name="tipi" onClick={onChange} />
                                    <span>Web Reference</span>
                                </label>
                            </div>
                        </div>

                        {topologjia === 'ecommerce' &&
                            <div id="pyetja1-vazhdimi" className="vazhdimi-pyetja1">
                                <div className="flex-1">
                                    <div id="1a">
                                        <p className="margin-bottom">a.Sa produkte do te permbaj web-i?</p>

                                        <label className="label">
                                            <input type="radio" name="sasia" value="50" id="50" checked={produktetNeWeb === '50' ? true : false} onClick={pyetja5A}/>
                                            <span>1-50</span>
                                        </label><br />

                                        <label className="label" >
                                            <input type="radio" name="sasia" value="300" id="300" onClick={pyetja5A}/>
                                            <span>51-300</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="sasia" value="301" id="301" onClick={pyetja5A}/>
                                            <span>300+</span>
                                        </label>
                                    </div>

                                    <div id="1b">
                                        <p className="margin-bottom">b.Kush do te te merret me hedhjen e produkteve?</p>

                                        <label className="label">
                                            <input type="radio" name="pergjegjesi" value="codeit" id="codeit" checked={hedhjaProdukteveEcommerce === 'codeit' ? true : false} onClick={pyetja5B} />
                                            <span>codeIT</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="pergjegjesi" value="klienti" id="klienti" onClick={pyetja5B}/>
                                            <span >Klienti</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="pergjegjesi" value="pala" id="pala" onClick={pyetja5B}/>
                                            <span >Pala e trete</span>
                                        </label>
                                    </div>
                                </div>


                                <div className="flex-2">
                                    <div id="1c">
                                        <p className="margin-bottom">c.Cila eshte platforma qe do te ndertohet?</p>

                                        <label className="label" >
                                            <input type="radio" name="platform" value="wordpress" id="wordpress" checked={platforma === 'wordpress' ? true : false} onClick={pyetja5C}/>
                                            <span >Wordpress</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="platform" value="shopify" id="shopify" onClick={pyetja5C}/>
                                            <span >Shopify</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="platform" value="prestashop" id="prestashop" onClick={pyetja5C}/>
                                            <span>Prestashop</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="platform" value="magento" id="magento" onClick={pyetja5C}/>
                                            <span>Magento</span>
                                        </label>
                                    </div>


                                    <div id="1d" style={{ marginRight: "55px" }}>
                                        <p className="margin-bottom">d.Cilat do te te jene menyrat e pageses?</p>
                                        <label className="label">
                                            <input type="radio" name="pagesa" value="cash" id="cash" checked={pagesa === 'cash' ? true : false} onClick={pyetja5D}/>
                                            <span>Cash</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="pagesa" value="paypal" id="paypal" onClick={pyetja5D}/>
                                            <span>Paypal</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="pagesa" value="credit" id="credit" onClick={pyetja5D}/>
                                            <span>Credit Card Paypal</span>
                                        </label><br />

                                        <label className="label">
                                            <input type="radio" name="pagesa" value="stripe" id="stripe" onClick={pyetja5D}/>
                                            <span>Stripe</span>
                                        </label>
                                    </div>
                                </div>
                            </div>}

                        <div className="image-choice">

                            <p className="p-dy">7.Kerkesat e dizajnit ne WEB</p>
                            <div className="choices">
                                <div className="flex-image">
                                    <label htmlFor="thjeshte"><img className="img" src="golda.jpg" alt="golda" /></label>
                                    <label className="label">
                                        <input type="radio" name="foto" value="thjeshte" id="thjeshte" checked={dizajniWebit === 'thjeshte' ? true : false} onClick={pyetja7}/>
                                        <span>I thjeshte</span>
                                    </label>
                                </div>

                                <div className="flex-image">
                                    <label htmlFor="avanc"><img className="img" src="Dosja.jpg" alt="dosja" /></label>
                                    <label className="label">
                                        <input type="radio" name="foto" value="avanc" id="avanc" onClick={pyetja7}/>
                                        <span>I Avancuar</span>
                                    </label>
                                </div>

                                <div className="flex-image">
                                    <label htmlFor="kompleks"><img className="img" src="limitless.jpg" alt="limitless" /></label>
                                    <label className="label">
                                        <input type="radio" name="foto" value="kompleks" id="kompleks" onClick={pyetja7}/>
                                        <span>Kompleks</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="tre-kater">

                            <div id="p3">
                                <p className="margin-bottom">8.Sa gjuhe do jene ne webin tuaj?</p>
                                <label className="label" >
                                    <input type="radio" name="gjuha" id="nje" value="nje" checked={gjuhetWeb === 'nje' ? true : false} onClick={pyetja8} />
                                    <span>Nje gjuhe</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="gjuha" id="shume" value="shume" onClick={pyetja8}/>
                                    <span>Shume Gjuhe</span>
                                </label>
                            </div>

                            <div id="p4">
                                <p className="margin-bottom">9.Nga cila pale do te te behet hedhja e materialeve</p>

                                <label className="label">
                                    <input type="radio" name="materiale" id="klient" value="klient" checked={hedhjaMaterialeveWeb === 'klient' ? true : false} onClick={pyetja9}/>
                                    <span>Klienti</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="materiale" id="codeIT" value="codeIT" onClick={pyetja9}/>
                                    <span>CodeIT</span>
                                </label>
                            </div>
                        </div>

                        <div className="pes-gjashte">
                            <div id="p5">
                                <p className="margin-bottom">10.Sa faqe kryesore ka web-i?</p>
                                <label className="label">
                                    <input type="radio" name="nrfaqeve" id="pes" value="pes" checked={faqetNeWeb === '5' ? true : false} onClick={pyetja10} />
                                    <span>1-5: <span className="span">(Home,Rreth Nesh,Sherbime,Galeri,Kontakt)</span></span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="nrfaqeve" id="gjasht" value="gjasht" onClick={pyetja10}/>
                                    <span>6-11</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="nrfaqeve" id="11" value="11" onClick={pyetja10}/>
                                    <span>11+</span>
                                </label>
                            </div>
                            <div id="p6">
                                <p className="margin-bottom">11.A keni host dhe domain?</p>
                                <label className="label">
                                    <input type="radio" name="hostdomain" value="skam" id="skam" checked={hostDomain === 'skam' ? true : false} onClick={pyetja11}/>
                                    <span>Nuk kam asnjeren</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="hostdomain" value="kamhost" id="kamhost" onClick={pyetja11}/>
                                    <span>Kam Host</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="hostdomain" value="kamdomain" id="kamdomain" onClick={pyetja11}/>
                                    <span>Kam Domain</span>
                                </label><br />

                                <label className="label">
                                    <input type="radio" name="hostdomain" value="tedyja" id="tedyja" onClick={pyetja11}/>
                                    <span>Kam Host & Domain</span>
                                </label>
                            </div>
                        </div>
                        <div className="shtate">
                            <p className="margin-bottom">12.Sa e rendesishme eshte renditja e web-it tuaj ne motoret e kerkimit?</p>
                            <label className="label">
                                <input type="radio" name="seo" value="aspak" id="aspak" checked={rendesiaSEO === 'aspak' ? true : false} onClick={pyetja12}/>
                                <span>Aspak e rendesishme</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="seo" value="pak" id="pak" onClick={pyetja12}/>
                                <span>Pak e rendesishme</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="seo" value="rendesishme" id="rendesishme" onClick={pyetja12}/>
                                <span>E rendesishme</span>
                            </label><br />

                            <label className="label">
                                <input type="radio" name="seo" value="shum" id="shum" onClick={pyetja12}/>
                                <span>Shume e rendesishme</span>
                            </label>
                        </div>
                        <div className="tete">
                            <p className="margin-bottom"> 13.Ne web do te te kete element si: <span>(mund te zgjidhni me shume se 1 alternative)</span></p>
                            <div className="checkboxes-choice">

                                <div className="flex-check1">

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="blog" value="blog" onClick={pyetja13}/>
                                        <label htmlFor="blog">Blog</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="portofolio" value="portofolio" onClick={pyetja13}/>
                                        <label htmlFor="portofolio">Portofolio</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="rez-kalendar" value="rez-kalendar" onClick={pyetja13}/>
                                        <label htmlFor="rez-kalendar">Rezervime/Kalendar eventesh</label>
                                    </div>

                                </div>

                                <div className="flex-check2">

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="artikuj" value="artikuj" onClick={pyetja13}/>
                                        <label htmlFor="artikuj">Artikuj</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="faq" value="faq" onClick={pyetja13}/>
                                        <label htmlFor="faq">FAQ-s</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="livechat" value="livechat" onClick={pyetja13}/>
                                        <label htmlFor="livechat">Live Chat</label>
                                    </div>

                                </div>

                                <div className="flex-check3">

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="googlemap" value="googlemap" onClick={pyetja13}/>
                                        <label htmlFor="googlemap">Google Maps</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="prof-perdorues" value="prof-perdorues" onClick={pyetja13}/>
                                        <label htmlFor="prof-perdorues">Newsletter</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" className="checkbox-choices" name="element" id="newsletter" value="newsletter" onClick={pyetja13}/>
                                        <label htmlFor="newsletter">Newsletter</label>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                }
                <div className="aplikacion">

                    <div className="form-aplikacion" >

                        <div className="submit-app">
                            <div className="left">
                                <p>Plotesoni fushat duke na derguar automatikisht te dhenat e kerkeses</p>
                                <input type="text" placeholder="Emri*" value={emri} onChange={(e) => vendosEmer(e.target.value)} required />
                                <input type="email" placeholder="Email*" value={email} onChange={(e) => vendosEmail(e.target.value)} required />
                                <input type="tel" placeholder="Tel*" value={tel} onChange={(e) => vendosTel(e.target.value)} required />

                            </div>
                            <div className="right">
                                <textarea name="kerkesetjeter" id="kerkesetjeter" value={kerkeseTjeter} placeholder="Kerkese Tjeter" cols="30" rows="10" onChange={(e) => vendosKerkese(e.target.value)}></textarea>
                            </div>

                        </div>
                        <div className="submit">
                            <input type="submit" value="Dergo Kerkesen" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
</div>
    );
}

export default Marketing;