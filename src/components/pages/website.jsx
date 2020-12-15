import React, { useState, useEffect } from "react";
import translate from "../../i18n/translate";
const Website = () => {
  const [topologjia, shtovlere] = useState("prezantues");
  const [linkRefer, shtoLinkRefer] = useState("");
  const [produktetNeWeb, shtovlere1a] = useState("");
  const [hedhjaProdukteveEcommerce, shtovlere1b] = useState("");
  const [platforma, shtovlere1c] = useState("");
  const [pagesa, shtovlere1d] = useState("");
  const [dizajniWebit, shtovlere2] = useState("thjeshte");
  const [gjuhetWeb, shtovlere3] = useState("nje");
  const [hedhjaMaterialeveWeb, shtovlere4] = useState("klient");
  const [faqetNeWeb, shtovlere5] = useState("5");
  const [hostDomain, shtovlere6] = useState("skam");
  const [rendesiaSEO, shtovlere7] = useState("aspak");
  const [elementetNeWeb, shtovlere8] = useState([]);
  const [biznesitInevojitet, shtovlere9] = useState([]);
  const [frekuencaPostimeveMediaJaves, shtovlere10] = useState("");
  const [setiFotografikNeMuaj, shtovlere11] = useState("");
  const [vendiPromovimit, shtovlere12] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [duaMenaxhimSocial, vendosMenaxhimSocial] = useState(false);
  const [duaSetFotografik, vendosSetFotografik] = useState(false);
  const [duaFushatMarketingu, vendoFushatMarketingu] = useState(false);
  const [markaRegjistruar, regjistroMarken] = useState("Jo");
  const [emri, vendosEmer] = useState("");
  const [email, vendosEmail] = useState("");
  const [tel, vendosTel] = useState("");
  const [kerkeseTjeter, vendosKerkese] = useState("");
  const [pop, putPop] = useState(false);
  useEffect(() => {
    if (topologjia === "ecommerce") {
      shtovlere1a("50");
      shtovlere1b("codeit");
      shtovlere1c("wordpress");
      shtovlere1d("cash");
    } else {
      shtovlere1a("");
      shtovlere1b("");
      shtovlere1c("");
      shtovlere1d("");
    }
  }, [topologjia]);
  console.log(topologjia);
  console.log(linkRefer);
  const pytetja13 = (e) => {
    const item = e.target;

    if (item.checked) {
      return regjistroMarken("Po");
    }
    regjistroMarken("Jo");
  };

  const onChange = (e) => {
    shtovlere(e.target.value);
  };

  const pyetjaNjeA = (e) => {
    shtovlere1a(e.target.value);
  };

  const pyetjaNjeB = (e) => {
    shtovlere1b(e.target.value);
  };

  const pyetjaNjeC = (e) => {
    shtovlere1c(e.target.value);
  };

  const pyetjaNjeD = (e) => {
    shtovlere1d(e.target.value);
  };

  const pyetjaDy = (e) => {
    shtovlere2(e.target.value);
  };

  const pyetjaTre = (e) => {
    shtovlere3(e.target.value);
  };
  const pyetjaKater = (e) => {
    shtovlere4(e.target.value);
  };

  const pyetjaPes = (e) => {
    shtovlere5(e.target.value);
  };

  const pyetjaSix = (e) => {
    shtovlere6(e.target.value);
  };

  const pyetjaSeven = (e) => {
    shtovlere7(e.target.value);
  };

  const pyetjaTet = (e) => {
    const item = e.target;

    if (item.checked) {
      shtovlere8(elementetNeWeb.concat(item.value));
    } else if (!item.checked) {
      elementetNeWeb.splice(item.value, 1);
    }
  };

  const pyetjaNine = (e) => {
    const item = e.target;

    if (item.checked) {
      shtovlere9(biznesitInevojitet.concat(item.value));
    } else if (!item.checked) {
      biznesitInevojitet.splice(item.value, 1);
    }
  };

  const pyetjaTen = (e) => {
    const item = e.target;
    shtovlere10(item.value);
  };

  const pyetjaEleven = (e) => {
    const item = e.target;
    shtovlere11(item.value);
  };
  const pyetjaTweleve = (e) => {
    const item = e.target;
    if (item.checked) {
      shtovlere12(vendiPromovimit.concat(item.value));
    } else if (!item.checked) {
      vendiPromovimit.splice(item.value, 1);
    }
  };
  const reload = () => {
    window.location.reload();
    putPop(false);
  };
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
      vendiPromovimit,
      markaRegjistruar,
      linkRefer,
    };

    fetch("https://codeit-last.herokuapp.com/website", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payload),
    });
    shtovlere("prezantues");
    shtovlere2("thjeshte");
    shtovlere3("nje");
    shtovlere4("klient");
    shtovlere5("5");
    shtovlere6("skam");
    shtovlere7("aspak");
    shtovlere8([]);
    shtovlere9([]);
    shtovlere10("");
    shtovlere11("");
    shtovlere12([]);
    regjistroMarken("Jo");
    vendosEmer("");
    vendosEmail("");
    vendosTel("");
    vendosKerkese("");
    putPop(true);
    setIsChecked(false);
    vendoFushatMarketingu(false);
    vendosSetFotografik(false);
    vendosMenaxhimSocial(false);
    shtoLinkRefer("");
  };

  return (
    <div>
      <div className={pop ? "pop-up-show" : "close"}>
        <div className={pop ? "popup show" : "popup"}>
          <div className="content">
            <div className="icon-ticket">
              <i className="fa fa-check-circle"></i>
            </div>
            <div className="mesazhi">
              <h1>Faleminderit!</h1>
              <p>Ju do te merrni oferten tuaj te personalizuar</p>
              <p> brenda 24h ne adresen e emailit qe plotesuat</p>
            </div>
            <div className="close-popup">
              <button className="popup-close" onClick={reload}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="website">
        <form className="form" onSubmit={onSubmit}>
          <div className="nje" id="pyetja1">
            <p className="p-nje">1.{translate("pytja1")}</p>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value="prezantues"
                  id="prezantues"
                  name="tipi"
                  checked={topologjia === "prezantues" ? true : false}
                  onChange={onChange}
                />
                <span>{translate("alternativa1pytja1")}</span>
              </label>
            </div>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value="ecommerce"
                  id="ecommerce"
                  name="tipi"
                  onChange={onChange}
                />
                <span>{translate("alternativa2pytja1")}</span>
              </label>
            </div>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value="booking"
                  id="booking"
                  name="tipi"
                  onChange={onChange}
                />
                <span>{translate("alternativa3pytja1")}</span>
              </label>
            </div>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value="portale"
                  id="portale"
                  name="tipi"
                  onChange={onChange}
                />
                <span>{translate("alternativa4pytja1")}</span>
              </label>
            </div>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value="delivery"
                  id="delivery"
                  name="tipi"
                  onChange={onChange}
                />
                <span>{translate("alternativa5pytja1")}</span>
              </label>
            </div>

            <div className="margin-pyetjet">
              <label className="label">
                <input
                  type="radio"
                  value={"reference"}
                  id="reference"
                  name="tipi"
                  onClick={onChange}
                />
                <span>{translate("alternativa6pytja1")}</span>
              </label>
              <input
                type="text"
                className="refer-input"
                disabled={topologjia === "reference" ? false : true}
                onChange={(e) => shtoLinkRefer(e.target.value)}
                style={{
                  border: "none",
                  borderBottom: "1px solid gray",
                  outline: "none",
                  padding: "0px 10px",
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>

          {topologjia === "ecommerce" && (
            <div id="pyetja1-vazhdimi" className="vazhdimi-pyetja1">
              <div className="flex-1">
                <div id="1a">
                  <p className="margin-bottom">a.{translate("pytj1a")}</p>

                  <label className="label">
                    <input
                      type="radio"
                      name="sasia"
                      value="50"
                      id="50"
                      checked={produktetNeWeb === "50" ? true : false}
                      onChange={pyetjaNjeA}
                    />
                    <span>1-50</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="sasia"
                      value="300"
                      id="300"
                      onChange={pyetjaNjeA}
                    />
                    <span>51-300</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="sasia"
                      value="301"
                      id="301"
                      onChange={pyetjaNjeA}
                    />
                    <span>300+</span>
                  </label>
                </div>
                <div id="1c">
                  <p className="margin-bottom">c.{translate("pytj1c")}</p>

                  <label className="label">
                    <input
                      type="radio"
                      name="platform"
                      value="wordpress"
                      id="wordpress"
                      checked={platforma === "wordpress" ? true : false}
                      onChange={pyetjaNjeC}
                    />
                    <span>Wordpress</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="platform"
                      value="shopify"
                      id="shopify"
                      onChange={pyetjaNjeC}
                    />
                    <span>Shopify</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="platform"
                      value="prestashop"
                      id="prestashop"
                      onChange={pyetjaNjeC}
                    />
                    <span>Prestashop</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="platform"
                      value="magento"
                      id="magento"
                      onChange={pyetjaNjeC}
                    />
                    <span>Magento</span>
                  </label>
                </div>
              </div>

              <div className="flex-2">
                <div id="1b">
                  <p className="margin-bottom">b.{translate("pytj1b")}</p>

                  <label className="label">
                    <input
                      type="radio"
                      name="pergjegjesi"
                      value="codeit"
                      id="codeit"
                      checked={
                        hedhjaProdukteveEcommerce === "codeit" ? true : false
                      }
                      onChange={pyetjaNjeB}
                    />
                    <span>codeIT</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="pergjegjesi"
                      value="klienti"
                      id="klienti"
                      onChange={pyetjaNjeB}
                    />
                    <span>Klienti</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="pergjegjesi"
                      value="pala"
                      id="pala"
                      onChange={pyetjaNjeB}
                    />
                    <span>{translate("alternativa1pytj1b")}</span>
                  </label>
                </div>

                <div id="1d" style={{ marginRight: "75px" }}>
                  <p className="margin-bottom">d.{translate("pytj1d")}</p>

                  <label className="label">
                    <input
                      type="radio"
                      name="pagesa"
                      value="cash"
                      id="cash"
                      checked={pagesa === "cash" ? true : false}
                      onChange={pyetjaNjeD}
                    />
                    <span>Cash</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="pagesa"
                      value="paypal"
                      id="paypal"
                      onChange={pyetjaNjeD}
                    />
                    <span>Paypal</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="pagesa"
                      value="credit"
                      id="credit"
                      onChange={pyetjaNjeD}
                    />
                    <span>Credit Card Paypal</span>
                  </label>
                  <br />

                  <label className="label">
                    <input
                      type="radio"
                      name="pagesa"
                      value="stripe"
                      id="stripe"
                      onChange={pyetjaNjeD}
                    />
                    <span>Stripe</span>
                  </label>
                </div>
              </div>
            </div>
          )}
          <div className="image-choice">
            <p className="p-dy">2.{translate("pytja2")}</p>
            <div className="choices">
              <div className="flex-image">
                <label htmlFor="thjeshte">
                  <img className="img" src="golda.jpg" alt="golda" />
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="foto"
                    value="thjeshte"
                    id="thjeshte"
                    checked={dizajniWebit === "thjeshte" ? true : false}
                    onChange={pyetjaDy}
                  />
                  <span>{translate("alternativa1pytja2")}</span>
                </label>
              </div>

              <div className="flex-image">
                <label htmlFor="avanc">
                  <img className="img" src="limitless.jpg" alt="limitless" />
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="foto"
                    value="avanc"
                    id="avanc"
                    onChange={pyetjaDy}
                  />
                  <span>{translate("alternativa2pytja2")}</span>
                </label>
              </div>

              <div className="flex-image">
                <label htmlFor="kompleks">
                  <img className="img" src="Dosja.jpg" alt="dosja" />
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="foto"
                    value="kompleks"
                    id="kompleks"
                    onChange={pyetjaDy}
                  />
                  <span> {translate("alternativa3pytja2")} </span>
                </label>
              </div>
            </div>
          </div>
          <div className="tre-kater">
            <div id="p3">
              <p className="margin-bottom">3.{translate("pytja3")}</p>

              <label className="label">
                <input
                  type="radio"
                  name="gjuha"
                  id="nje"
                  value="nje"
                  checked={gjuhetWeb === "nje" ? true : false}
                  onChange={pyetjaTre}
                />
                <span>{translate("alternativa1pytja3")}</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="gjuha"
                  id="shume"
                  value="shume"
                  onChange={pyetjaTre}
                />
                <span>{translate("alternativa2pytja3")}</span>
              </label>
            </div>

            <div id="p4">
              <p className="margin-bottom">4.{translate("pytja4")}</p>

              <label className="label">
                <input
                  type="radio"
                  name="materiale"
                  id="klient"
                  value="klient"
                  checked={hedhjaMaterialeveWeb === "klient" ? true : false}
                  onChange={pyetjaKater}
                />
                <span>{translate("alternativa1pytja4")}</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="materiale"
                  id="codeIT"
                  value="codeIT"
                  onChange={pyetjaKater}
                />
                <span>CodeIT</span>
              </label>
            </div>
          </div>

          <div className="pes-gjashte">
            <div id="p5">
              <p className="margin-bottom">5.{translate("pytja5")}</p>

              <label className="label">
                <input
                  type="radio"
                  name="nrfaqeve"
                  id="pes"
                  value="5"
                  checked={faqetNeWeb === "5" ? true : false}
                  onChange={pyetjaPes}
                />
                <span>
                  1-5: <span className="span">({translate("faqet")})</span>
                </span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="nrfaqeve"
                  id="gjasht"
                  value="gjasht"
                  onChange={pyetjaPes}
                />
                <span>6-11</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="nrfaqeve"
                  id="11"
                  value="11"
                  onChange={pyetjaPes}
                />
                <span>11+</span>
              </label>
            </div>
            <div id="p6">
              <p className="margin-bottom">6.{translate("pytja6")}</p>

              <label className="label">
                <input
                  type="radio"
                  name="hostdomain"
                  value="skam"
                  id="skam"
                  checked={hostDomain === "skam" ? true : false}
                  onChange={pyetjaSix}
                />
                <span>{translate("alternativa1pytja6")}</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="hostdomain"
                  value="kamhost"
                  id="kamhost"
                  onChange={pyetjaSix}
                />
                <span>{translate("alternativa2pytja6")}</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="hostdomain"
                  value="kamdomain"
                  id="kamdomain"
                  onChange={pyetjaSix}
                />
                <span>{translate("alternativa3pytja6")}</span>
              </label>
              <br />

              <label className="label">
                <input
                  type="radio"
                  name="hostdomain"
                  value="tedyja"
                  id="tedyja"
                  onChange={pyetjaSix}
                />
                <span>{translate("alternativa4pytja6")}</span>
              </label>
            </div>
          </div>
          <div className="shtate">
            <p className="margin-bottom">7.{translate("pytja7")}</p>

            <label className="label">
              <input
                type="radio"
                name="seo"
                value="aspak"
                id="aspak"
                checked={rendesiaSEO === "aspak" ? true : false}
                onChange={pyetjaSeven}
              />
              <span>{translate("alternativa1pytja7")}</span>
            </label>
            <br />

            <label className="label">
              <input
                type="radio"
                name="seo"
                value="pak"
                id="pak"
                onChange={pyetjaSeven}
              />
              <span>{translate("alternativa2pytja7")}</span>
            </label>
            <br />

            <label className="label">
              <input
                type="radio"
                name="seo"
                value="rendesishme"
                id="rendesishme"
                onChange={pyetjaSeven}
              />
              <span>{translate("alternativa3pytja7")}</span>
            </label>
            <br />

            <label className="label">
              <input
                type="radio"
                name="seo"
                value="shum"
                id="shum"
                onChange={pyetjaSeven}
              />
              <span>{translate("alternativa4pytja7")}</span>
            </label>
          </div>
          <div className="tete">
            <p>
              8.{translate("pytja8")}
              <span className="span">({translate("alternativa")})</span>
            </p>
            <div className="checkboxes-choice">
              <div className="flex-check1">
                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="blog"
                    value="blog"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="blog">Blog</label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="portofolio"
                    value="portofolio"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="portofolio">Portfolio</label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="rez-kalendar"
                    value="rez-kalendar"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="rez-kalendar">
                    {translate("alternativa5pytja8")}
                  </label>
                </div>
              </div>

              <div className="flex-check2">
                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="artikuj"
                    value="artikuj"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="artikuj">
                    {translate("alternativa1pytja8")}
                  </label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="faq"
                    value="faq"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="faq">{translate("alternativa2pytja8")}</label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="livechat"
                    value="livechat"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="livechat">
                    {translate("alternativa3pytja8")}
                  </label>
                </div>
              </div>

              <div className="flex-check3">
                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="googlemap"
                    value="googlemap"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="googlemap">Google Maps</label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="prof-perdorues"
                    value="prof-perdorues"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="prof-perdorues">
                    {translate("alternativa4pytja8")}
                  </label>
                </div>

                <div>
                  <input
                    className="checkbox-choices"
                    type="checkbox"
                    name="element"
                    id="newsletter"
                    value="newsletter"
                    ischecked="true"
                    onClick={pyetjaTet}
                  />
                  <label htmlFor="newsletter">Newsletter</label>
                </div>
              </div>
            </div>
          </div>

          <div className="web-marketing">
            <h3>{translate("domarketing")}</h3>

            <div className="switch_box box_4">
              <div className="input_wrapper">
                <input
                  type="checkbox"
                  className="switch_4"
                  onChange={(event) =>
                    setIsChecked(event.currentTarget.checked)
                  }
                  checked={isChecked}
                />
                <svg
                  className="is_checked"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 426.67 426.67"
                >
                  <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                </svg>
                <svg
                  className="is_unchecked"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 212.982 212.982"
                >
                  <path
                    d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {isChecked === true && (
            <>
              <div className="nenta">
                <p className="margin-bottom">
                  9.{translate("pytja9")}
                  <span className="span">({translate("alternativa")})</span>
                </p>
                <div className="marketing-9">
                  <input
                    type="checkbox"
                    className="checkbox-choices"
                    name="nevojitet"
                    id="emer"
                    value="emer"
                    onClick={pyetjaNine}
                  />
                  <label htmlFor="emer">
                    {translate("alternativa1pytja9")}
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    className="checkbox-choices"
                    name="nevojitet"
                    id="logo"
                    value="logo"
                    onClick={pyetjaNine}
                  />
                  <label htmlFor="logo">Logo</label>
                  <br />

                  <input
                    type="checkbox"
                    className="checkbox-choices"
                    name="nevojitet"
                    id="imazh-marke"
                    value="imazh-marke"
                    onClick={pyetjaNine}
                  />
                  <label htmlFor="imazh-marke">
                    {translate("alternativa2pytja9")}
                  </label>
                  <br />

                  <input
                    type="checkbox"
                    className="checkbox-choices"
                    name="nevojitet"
                    id="tetreja"
                    value="tetreja"
                    onClick={pyetjaNine}
                  />
                  <label htmlFor="tetreja">
                    {translate("alternativa3pytja9")}
                  </label>
                </div>
              </div>

              <div className="dhjeta">
                <div className="dhjeta-left">
                  <p>10.{translate("pytja10")}</p>

                  <div className="switch_box box_4">
                    <div className="input_wrapper">
                      <input
                        type="checkbox"
                        className="switch_4"
                        onChange={(event) =>
                          vendosMenaxhimSocial(event.currentTarget.checked)
                        }
                        checked={duaMenaxhimSocial}
                      />
                      <svg
                        className="is_checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 426.67 426.67"
                      >
                        <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                      </svg>
                      <svg
                        className="is_unchecked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 212.982 212.982"
                      >
                        <path
                          d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {duaMenaxhimSocial === true && (
                  <div className="dhjeta-right">
                    <p className="margin-bottom">{translate("pytja10a")}</p>
                    <label className="label">
                      <input
                        type="radio"
                        name="frekuenca"
                        id="3"
                        value="3"
                        onClick={pyetjaTen}
                      />
                      <span>1-3</span>
                    </label>
                    <br />

                    <label className="label">
                      <input
                        type="radio"
                        name="frekuenca"
                        id="7"
                        value="7"
                        onClick={pyetjaTen}
                      />
                      <span>4-7</span>
                    </label>
                    <br />

                    <label className="label">
                      <input
                        type="radio"
                        name="frekuenca"
                        id="14"
                        value="14"
                        onClick={pyetjaTen}
                      />
                      <span>8-14</span>
                    </label>
                    <br />

                    <label className="label">
                      <input
                        type="radio"
                        name="frekuenca"
                        id="15"
                        value="15"
                        onClick={pyetjaTen}
                      />
                      <span>15+</span>
                    </label>
                  </div>
                )}
              </div>

              <div className="eleven">
                <div className="eleven-left">
                  <p>11.{translate("pytja11")}</p>
                  <div className="switch_box box_4">
                    <div className="input_wrapper">
                      <input
                        type="checkbox"
                        className="switch_4"
                        onChange={(event) =>
                          vendosSetFotografik(event.currentTarget.checked)
                        }
                        checked={duaSetFotografik}
                      />
                      <svg
                        className="is_checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 426.67 426.67"
                      >
                        <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                      </svg>
                      <svg
                        className="is_unchecked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 212.982 212.982"
                      >
                        <path
                          d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {duaSetFotografik === true && (
                  <div className="eleven-right">
                    <p className="margin-bottom">{translate("pytja11a")}</p>
                    <label className="label">
                      <input
                        type="radio"
                        name="seti"
                        id="1here"
                        value="1here"
                        onClick={pyetjaEleven}
                      />
                      <span>{translate("alternativa1pytja11a")}</span>
                    </label>
                    <br />

                    <label className="label">
                      <input
                        type="radio"
                        name="seti"
                        id="2here"
                        value="2here"
                        onClick={pyetjaEleven}
                      />
                      <span>{translate("alternativa2pytja11a")}</span>
                    </label>
                  </div>
                )}
              </div>

              <div className="twelve">
                <div className="twelve-left">
                  <p>12.{translate("pytja12")}</p>
                  <div className="switch_box box_4">
                    <div className="input_wrapper">
                      <input
                        type="checkbox"
                        className="switch_4"
                        onChange={(event) =>
                          vendoFushatMarketingu(event.currentTarget.checked)
                        }
                        checked={duaFushatMarketingu}
                      />
                      <svg
                        className="is_checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 426.67 426.67"
                      >
                        <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                      </svg>
                      <svg
                        className="is_unchecked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 212.982 212.982"
                      >
                        <path
                          d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {duaFushatMarketingu === true && (
                  <div className="twelve-right">
                    <p className="margin-bottom">
                      {translate("pytja12a")}
                      <span className="span-2">
                        ({translate("alternativa")})
                      </span>
                    </p>
                    <input
                      type="checkbox"
                      className="checkbox-choices"
                      name="promovim"
                      id="tv"
                      value="tv"
                      onClick={pyetjaTweleve}
                    />
                    <label htmlFor="tv">TV</label>
                    <br />

                    <input
                      type="checkbox"
                      className="checkbox-choices"
                      name="promovim"
                      id="radio"
                      value="radio"
                      onClick={pyetjaTweleve}
                    />
                    <label htmlFor="radio">Radio</label>
                    <br />

                    <input
                      type="checkbox"
                      className="checkbox-choices"
                      name="promovim"
                      id="online"
                      value="online"
                      onClick={pyetjaTweleve}
                    />
                    <label htmlFor="online">Online</label>
                    <br />

                    <input
                      type="checkbox"
                      className="checkbox-choices"
                      name="promovim"
                      id="portale-m"
                      value="portale"
                      onClick={pyetjaTweleve}
                    />
                    <label htmlFor="portale-m">Portale</label>
                    <br />

                    <input
                      type="checkbox"
                      className="checkbox-choices"
                      name="promovim"
                      id="tegjitha"
                      value="tegjitha"
                      onClick={pyetjaTweleve}
                    />
                    <label htmlFor="tegjitha">
                      {translate("alternativa1pytja12a")}
                    </label>
                  </div>
                )}
              </div>
              <div className="thirteen">
                <p>13.{translate("pytja13")}</p>
                <div className="switch_box box_4">
                  <div className="input_wrapper">
                    <input
                      type="checkbox"
                      className="switch_4"
                      onClick={pytetja13}
                    />
                    <svg
                      className="is_checked"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 426.67 426.67"
                    >
                      <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                    </svg>
                    <svg
                      className="is_unchecked"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 212.982 212.982"
                    >
                      <path
                        d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="aplikacion">
            <div className="form-aplikacion">
              <div className="submit-app">
                <div className="left">
                  <p>{translate("titulliformes")}</p>
                  <label htmlFor=""> {translate("emri")} </label>
                  <input
                    type="text"
                    value={emri}
                    onChange={(e) => vendosEmer(e.target.value)}
                    required
                  />
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => vendosEmail(e.target.value)}
                    required
                  />
                  <label htmlFor=""> {translate("phone")} </label>
                  <input
                    type="tel"
                    placeholder="Cel..."
                    value={tel}
                    onChange={(e) => vendosTel(e.target.value)}
                  />
                </div>
                <div className="right">
                  <label htmlFor="">{translate("kerkesa")}</label>
                  <textarea
                    name="kerkesetjeter"
                    id="kerkesetjeter"
                    value={kerkeseTjeter}
                    cols="30"
                    rows="10"
                    onChange={(e) => vendosKerkese(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="submit">
                <label className="submit-button" htmlFor="submit">
                  {translate("dergo")}
                </label>
                <input id="submit" type="submit" hidden />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Website;
