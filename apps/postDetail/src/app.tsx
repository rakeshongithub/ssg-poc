/** Root Component */

import React from 'react';
import Nav from './components/molecules/Nav';
import './styles/index.css';

const App = () => (
  <div data-testid="AppComponent" className="micro-app">
    <Nav />
    <h1>Hi there, I am React micro-app from webpack 5.</h1>
  </div>
);

export default App;
