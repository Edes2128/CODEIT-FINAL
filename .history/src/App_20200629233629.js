import React from 'react';
import NavBar from './components/navbar';


function App() {
  return (
    <div>
      <header className="App-header">
        <div className="logo"><img src="4.jpg" alt=""/></div>
        <div className="links">
        <a href="#" style={{color:"white",fontSize:"40px"}}><i className="fa fa-instagram"></i></a>
        <a href="#" style={{color:"white",fontSize:"40px"}}><i className="fa fa-instagram"></i></a>
        <a href="#" style={{color:"white",fontSize:"40px"}}><i className="fa fa-instagram"></i></a>
        </div>
      </header>
      <NavBar />
    </div>
  );
}

export default App;
