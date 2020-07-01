import React from 'react';
import NavBar from './components/navbar';


function App() {
  return (
    <div>
      <header className="App-header">
        <div className="logo"><img src="4.jpg" alt=""/></div>
        <div className="links">
        <a href="#"><i className="fa fa-g"></i></a>
        </div>
      </header>
      <NavBar />
    </div>
  );
}

export default App;