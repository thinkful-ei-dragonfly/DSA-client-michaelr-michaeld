import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path='/'
        component={LandingPage}
      />
    </div>
  );
}

export default App;
