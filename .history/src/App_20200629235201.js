import React from 'react';
import NavBar from './components/navbar';
import {Switch,Route} from 'react-router-dom'
import 

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="logo"><img src="4.jpg" alt=""/></div>
        <div className="links">
        <a className="instagram" href="https://www.instagram.com/develop_your_brand/" target="_blank"><i className="fa fa-instagram"></i></a>
        <a className="facebook" href="https://www.facebook.com/Code-IT-shpk-1922218121419737" target="_blank"><i className="fa fa-facebook"></i></a>
        <a className="linkedin" href="https://www.linkedin.com/in/codeit-develop-your-brand-b9267a189/" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
      </header>
      <NavBar />

        <Switch>
          <Route exact path="/website" component={} />
          <Route exact path="/marketing" />
          <Route exact path="/aplikacion" />
        </Switch>

    </div>
  );
}

export default App;
