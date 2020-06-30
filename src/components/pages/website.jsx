import React , {useState} from 'react'


const Website = () => {
    
    const [pyetja1,shtovlere] = useState('');
    
     const onChange = (e) => {
       
        shtovlere(e.target.value);
     }
  

    return ( 
            <div className="website">
            <form className="form" >
                <div id="pyetja1">
                <p>1.Cila eshte topologjia e biznesit tuaj?</p>
                <input type="radio" value="prezantues"  id="prezantues"  name="tipi" onClick={onChange} />
                <label htmlFor="prezantues">Prezantues</label><br></br>

                <input type="radio" value="ecommerce" id="ecommerce" name="tipi" onClick={onChange}/>
                <label htmlFor="ecommerce">E-commerce</label><br/>

                <input type="radio" value="booking" id="booking" name="tipi" onClick={onChange} />
                <label htmlFor="booking">Booking</label><br/>

                <input type="radio" value="portale" id="portale" name="tipi"   onClick={onChange}/>
                <label htmlFor="portale">Portale</label><br/>

                <input type="radio" value="delivery" id="delivery" name="tipi"  onClick={onChange}/>
                <label htmlFor="delivery">Delivery</label><br/>

                <input type="radio" value="reference" id="reference" name="tipi"  onClick={onChange}/>
                <label htmlFor="reference">Web Reference</label>
                </div>


                {pyetja1 === 'ecommerce'  && 
                    <div id="pyetja1-vazhdimi" className="vazhdimi-pyetja1">
                        <div className="flex-1">
                            <div id="1a">
                                <p>a.Sa produkte do te permbaj web-i?</p>

                                <input type="radio" name="sasia" value="50" id="50" />
                                <label htmlFor="50">1-50</label><br />

                                <input type="radio" name="sasia" value="300" id="300" />
                                <label htmlFor="300">51-300</label><br />

                                <input type="radio" name="sasia" value="301" id="301" />
                                <label htmlFor="301">300+</label>
                            </div>

                            <div id="1b">
                                <p>b.Kush do te te merret me hedhjen e produkteve?</p>

                                <input type="radio" name="pergjegjesi" value="codeit" id="codeit" />
                                <label htmlFor="codeit">codeIT</label><br />

                                <input type="radio" name="pergjegjesi" value="klienti" id="klienti" />
                                <label htmlFor="klienti">Klienti</label><br />

                                <input type="radio" name="pergjegjesi" value="pala" id="pala" />
                                <label htmlFor="pala">Pala e trete</label>
                            </div>
                        </div>


                        <div className="flex-2">
                            <div id="1c">
                                <p>c.Cila eshte platforma qe do te ndertohet?</p>

                                <input type="radio" name="platform" value="wordpress" id="wordpress" />
                                <label htmlFor="wordpress">Wordpress</label><br />

                                <input type="radio" name="platform" value="shopify" id="shopify" />
                                <label htmlFor="shopify">Shopify</label><br />

                                <input type="radio" name="platform" value="prestashop" id="prestashop" />
                                <label htmlFor="prestashop">Prestashop</label><br />

                                <input type="radio" name="platform" value="magento" id="magento" />
                                <label htmlFor="magento">Magento</label>
                            </div>


                            <div id="1d">
                                <p>d.Cilat do te te jene menyrat e pageses?</p>

                                <input type="radio" name="pagesa" value="cash" id="cash" />
                                <label htmlFor="cash">Cash</label><br />

                                <input type="radio" name="pagesa" value="paypal" id="paypal" />
                                <label htmlFor="paypal">Paypal</label><br />

                                <input type="radio" name="pagesa" value="credit" id="credit" />
                                <label htmlFor="credit">Credit Card Paypal</label><br />

                                <input type="radio" name="pagesa" value="stripe" id="stripe" />
                                <label htmlFor="stripe">Stripe</label>
                            </div>
                        </div>
                    </div>}


            </form>
        </div>

     );
}
export default Website;
