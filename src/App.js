import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Cpricipal from './Cprincipal.js';
import About from './About.js';


function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cpricipal/>}/>
          <Route path='/about' element={<About/>}/>

          

        </Routes>
        
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
