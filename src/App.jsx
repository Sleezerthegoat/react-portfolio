import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
