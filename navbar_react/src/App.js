import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div className="App">
      
      







      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">9EYE</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Book Now <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>

    </ul>
    <span className="navbar-text">
    <button type="button" class="btn btn-primary">Sign In</button>
    
    </span>
    <span className="navbar-text"></span>
    <button type="button" class="btn btn-success">Sign Up</button>
    <span/>

  </div>
</nav>














  


      
      
    </div>
  );
}

export default App;
