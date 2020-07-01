import React from 'react'

const Aplikacion = () => {
    return ( 
            <div className="aplikacion">
                <p style={{marginTop:"10px"}}>Specifiko ne detaje kerkesat dhe funksionalitetet e aplikactioni</p>
                <form className="form-aplikacion" >
                    <textarea name="textarea-app" placeholder="Specifiko.." id="textarea-app" cols="30" rows="10" ></textarea>
                    <div className="submit-app">
                            <div className="left">
                                <p>Plotesoni fushat duke na derguar automatikisht te dhenat e kerkeses</p>
                                <input type="text" placeholder="Emri*" required/>
                                <input type="email" placeholder="Email*" required/>
                                <input type="tel" placeholder="Tel*" required/>
                                <input type="submit" value="Dergo Kerkesen"/>
                            </div>
                            <div className="right">
                                <textarea name="kerkesetjeter" id="kerkesetjeter" placeholder="Kerkese Tjeter" cols="30" rows="10"></textarea>
                            </div>
                    </div>
                </form>
            </div>
    );
}
export default Aplikacion;
