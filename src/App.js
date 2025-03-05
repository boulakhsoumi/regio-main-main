import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './nav-bar/Navbar.js';
import Animation from './animation/Animation.js';
import Can from './can25/Can.js';
import Concert from './concerts/Concert.js';

import Footer from './tooter/Footer.js';


function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar/>
        <Animation/>
        <Can/>
        <Concert/>
        <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
