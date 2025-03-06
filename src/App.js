import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Cpricipal from './Cprincipal.js';
import About from './About.js';
import Login from './Login/Login.js';


function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cpricipal/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/seconnecter' element={<Login/>}/>

          

        </Routes>
        
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
