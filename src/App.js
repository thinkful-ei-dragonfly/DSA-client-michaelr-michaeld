import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import AdoptionPage from './Components/AdoptionPage/AdoptionPage';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path='/'
        component={LandingPage}
      />
      <Route 
      path='/adoption' 
      component={AdoptionPage}
      />
    </div>
  );
}

export default App;
