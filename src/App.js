import React, { useState } from 'react';
import NavBar from './components/navbar';
import { Switch, Route } from 'react-router-dom'
import Website from './components/pages/website';
import Marketing from './components/pages/marketing';
import Aplikacion from './components/pages/aplikacion';
import Services from './components/pages/services';
import LocalProvider from './i18n/provider';
import { LOCALES } from './i18n/locales';
import Footer from './components/footer';
function App() {

  const [lan, setLan] = useState(LOCALES.ALBANIAN);
  console.log(lan)
  return (
    <LocalProvider locale={lan} >
      <header className="App-header">
        <div className="logo"><a href="/"><img src="4.jpg" alt="" /></a></div>
        <div className="links">
          <butonn className={lan === 'al' ? 'active-lan' : ''} onClick={() => setLan(LOCALES.ALBANIAN)} >AL</butonn>
          <butonn className={lan === 'en-us' ? 'active-lan' : ''} onClick={() => setLan(LOCALES.ENGLISH)} >EN</butonn>
          <butonn className={lan === 'it' ? 'active-lan' : ''} onClick={() => setLan(LOCALES.ITALIAN)} >IT</butonn>
        </div>
      </header>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Website} />
          <Route exact path="/marketing" component={Marketing} />
          <Route exact path="/aplikacion" component={Aplikacion} />
          <Route exact path="/services" component={Services} />
        </Switch>
        <Footer />
      </div>
    </LocalProvider>

  );
}
export default App;
